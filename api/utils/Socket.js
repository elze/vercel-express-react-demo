import { Server } from "socket.io";

class Socket {
  users = {}
  socketIdUserId = {}

  constructor(server) {
    this.io = server

    this.io.on("connection", socket => {
      console.log("a user connected")

      socket.on("join", user => {
        this.users[user.id] = {
          socketId: socket.id,
          socket: socket,
          user
        }

        this.socketIdUserId[socket.id] = user.id
      })

      socket.on("disconnect", () => {
        const userId = this.socketIdUserId[socket.id]

        if (userId) {
          delete this.users[userId]
          delete this.socketIdUserId[socket.id]
        }
      })
    })
  }

  static getInstance(server) {
    if (this._instance) {
      return this._instance
    }

    if (server) {
      this._instance = new Socket(server)
      return this._instance
    }

    return Error("Failed to init socket")
  }
  static sendMessageToUsers(userIds, message) {
    userIds.forEach(item => {
      const user = this._instance.users[item]

      if (user) {
        user.socket.emit("message", message)
      }
    })
  }

  static notifyUsersOnConversationCreate(userIds, conversation) {
    userIds.forEach(item => {
      const user = this._instance.users[item]

      if (user) {
        user.socket.emit("newConversation", conversation)
      }
    })
  }
}

export default Socket
