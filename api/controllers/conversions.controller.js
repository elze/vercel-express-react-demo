import supabase from "../utils/supabase"
import Socket from "../utils/socket"

export const getAllConversations = async function(req, res) {
  // get all conversations this user is attached to
  const paticipatingConversationIds = await supabase
    .from("user_conversation")
    .select("conversation_id")
    .eq("user_id", req.query.user_id)

  if (!paticipatingConversationIds.data?.length) {
    return res.send([])
  }

  const conversations = await supabase
    .from("conversations")
    .select(
      `
            *, 
            messages (
                id,
                conversation_id,
                message,
                created_at,
                users (
                    id,
                    username
                )
            )
        `
    )
    .or(
      `owner_user_id.eq.${
        req.query.user_id
      },or(id.in.(${paticipatingConversationIds.data.map(
        item => item.conversation_id
      )}))`
    )

  return res.send(conversations.data)
}

export const createConversation = async function(req, res) {
  console.log(req.body)
  var { owner_id, participant_ids, group_name } = req.body

  // first create the conversation
  const conversation = await supabase
    .from("conversations")
    .upsert({
      name: group_name,
      owner_user_id: owner_id,
      created_at: new Date().toISOString().toLocaleString()
    })
    .select()

  if (conversation.error) {
    return res.send(conversation.error)
  }
  let participants = []
  if (participant_ids.length > 1 && conversation.data?.length) {
    const pivotData = await supabase
      .from("user_conversation")
      .upsert(
        participant_ids.map(participant_id => {
          return {
            user_id: participant_id,
            conversation_id: conversation.data[0].id
          }
        })
      )
      .select()

    if (pivotData.data?.length) {
      // find our actual users
      const actualParticipantUsers = await supabase
        .from("users")
        .select()
        .in("id", participant_ids)

      if (actualParticipantUsers.data?.length)
        participants = actualParticipantUsers.data
    }
  }

  if (conversation.error) {
    return res.sendStatus(500)
  } else {
    const conv = {
      ...conversation.data[0],
      participants
    }

    return res.send(conv)
  }
}
// src/controllers/conversation.controller.ts
export const getConversationMessages = async function(req, res) {
  const { conversation_id } = req.params
  const { last_message_date } = req.query

  let query = supabase
    .from("messages")
    .select(
      `
            id,
            conversation_id,
            message,
            created_at,

            users (
                id,
                username
            )
        `
    )
    .order("created_at", { ascending: true })
    .eq("conversation_id", conversation_id)

  if (last_message_date) {
    query = query.gt("created_at", last_message_date)
  }

  const messages = await query

  res.send(messages.data)
}
// src/controllers/conversation.controller.ts
export const addMessageToConversation = async function(req, res) {
  const { user_id, message, conversationid } = req.body

  const data = await supabase.from("messages").upsert({
    conversation_id: conversationid,
    user_id,
    message,
    created_at: new Date().toISOString().toLocaleString()
  }).select(`
        *,
        users (
            id,
            username
        ),
        conversations (*)
      `)

  // get the users in this chat, except for the current one
  const userConversationIds = await supabase
    .from("user_conversation")
    .select("user_id")
    .eq("conversation_id", conversationid)

  if (data.error) {
    res.send(500)
  } else {
    if (userConversationIds.data && userConversationIds.data?.length > 0) {
      const userIdsForMessages = userConversationIds.data
        .map(item => item.user_id)
        .filter(item => item !== user_id)
      Socket.sendMessageToUsers(userIdsForMessages, data.data[0])
    }
    res.send(data.data[0])
  }
}
