import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import TextTransition, { presets } from "react-text-transition";
import ReactDOM from "react-dom";
import sanitizeHtml from "sanitize-html";
import Status from "../components/Status.jsx";

const content = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const fromLeft = {
  initial: { x: -20, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const fade = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function HomePage() {
  const [c, set] = useState("Home");
  const [user, setUser] = useState(null);

  const Title = ({ navSelected }) => {
    const [contentTitle, setContent] = useState("Home");

    const isFirstRender = useRef(true);

    useEffect(() => {
      isFirstRender.current = false;
    });

    useEffect(() => {
      if (!isFirstRender.current) {
        switch (navSelected) {
          case 1:
            setContent(
              <>
                <iconify-icon
                  icon="material-symbols:home-outline"
                  class="iconBtn fg-grey m-0 inline-block"
                  width="23"
                  height="23"
                ></iconify-icon>
                <span class="inline-block ml-[5px]">Home</span>
              </>,
            );
            set("Home");

            break;

          case 2:
            setContent(
              <>
                {" "}
                <iconify-icon
                  icon="ph:users-four-bold"
                  class="iconBtn fg-grey"
                  width="23"
                  height="23"
                ></iconify-icon>
                <span class="inline-block ml-[5px]">Social</span>
              </>,
            );
            set("Social");
            break;

          case 3:
            setContent(
              <>
                <iconify-icon
                  icon="material-symbols:mail-outline"
                  class="iconBtn fg-grey"
                  width="23"
                  height="23"
                ></iconify-icon>
                <span class="inline-block ml-[5px]">Mail</span>
              </>,
            );
            set("Mail");
            break;
          case 4:
            setContent(
              user.toSet,
            );
            break;
        }
      }
    }, [navSelected, user]);

    return (
      <TextTransition>
        <h1
          className="text-gray-400 transition-all duration-500 ml-10 font-boldroboto flex items-center"
          style={{ fontWeight: "700" }}
        >
          {contentTitle}
        </h1>
      </TextTransition>
    );
  };
  const [selected, setSelected] = useState(null);

  const [Profile, setProfile] = useState(<div />);
  const nameRef = useState(null);
  let index = 0;
  const User = (props) => {
    const { username, status = null, profile } = props;

    let statusType;

    switch (status.type) {
      case null:
        statusType = "offline-status";
        break;
      case "away":
        statusType = "away-status";
        break;

      case "online":
        statusType = "online-status";
        break;

      case "dnd":
        statusType = "dnd-status";
        break;

      case "offline":
        statusType = "offline-status";
        break;
    }
    var messageRef = React.useRef(null);
    useEffect(() => {
      messageRef.current?.addEventListener("mousedown", () => {
        var tempIndex = parseInt(messageRef.current.getAttribute("index"));

        index = tempIndex;
        setSelected(index);
        setUser({
          pfp: "/backgrounds/bg.webp",
          name: "hello",
          toSet: <>
                <div
                  class={`h-7 w-7 mr-3 rounded-full`}
                  style={{
                    backgroundImage: `url(`+"/backgrounds.bg.webp"+`)`
                  }}
                ></div>
              Hello
              </>
        });
        setNavSelected(4);
      });
    }, [messageRef.current]);
    var tempIndex = index;
    index = index + 1;

    return (
      <div class="flex items-start gap-2 hover:bg-zinc-700 px-5 rounded-md " ref={messageRef}>
        <div
          class="w-8 h-8 rounded-full userpfp cursor-pointer" 
          data-src={profile}
          alt="Jese image"
        ></div>
        <div class="flex flex-col w-full max-w-[320px] min-h-[56px] leading-1.5 cursor-pointer hover:bg-zinc-700 group">
          <div class="flex items-center space-x-2 rtl:space-x-reverse group">
            <span class="text-sm font-semibold text-[#727272] group-hover:text-white">{username}</span>
          </div>
          {status.text !== null && (
            <p class="text-sm font-normal py-1 text-[#727272] group-hover:text-white overflow-hidden text-ellipsis">
              {status.text}
            </p>
          )}
        </div>
      </div>
    );
  };
  const ProfileUser = (props) => {
    const { selected = false, username, status = null, isOpen = false } = props;

    let statusType;

    switch (status.type) {
      case null:
        statusType = "offline-status";
        break;

      case "online":
        statusType = "online-status";
        break;

      case "dnd":
        statusType = "dnd-status";
        break;

      case "offline":
        statusType = "offline-status";
        break;
    }
    var messageRef = React.useRef(null);

    return (
      <motion.div
        variants={fromLeft}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`profile-user relative  ${
          selected ? "selected-user" : ""
        } mt-1 rounded-md min-h-[56px] flex graygray bg-neutral-600	 items-center ${
          navOpen
            ? `w-[500px]`
            : `w-[75px]  hover:border-1 hover:border-solid hover:border-blue`
        }`}
        ref={messageRef}
      >
        <Status status={status.type} />

        {isOpen && (
          <div
            className={`font-robotoregular ${
              selected ? "selected-user-text " : "unselected-user-text"
            }`}
          >
            <span class="cursor-pointer select-none text-gray-200 text-base mb-0">
              {username}
            </span>
            {status.type !== null && (
              <p class="text-[#B5BAC1] cursor-pointer h-auto inline-block">
                {status.type}
              </p>
            )}
          </div>
        )}
      </motion.div>
    );
  };
  document.body.classList.add("chat-app");
  const [authToken, setAuthToken] = useState(null);
  const [deviceID, setDeviceID] = useState(null);
  const [userID, setUserID] = useState(null);
  const [username, setUserName] = useState(null);

  let users = [
    {
      username: "gigachadcoolguy",
      selected: !selected ? true : false,
      status: {
        type: "online",
        text: "hello",
      },
    },
    {
      username: "sigmamale",
      selected: false,
      status: {
        type: "online",
        text: "im so cooldddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      },
    },
  ];

  for (let i = 0; i < 30; i++) {
    users.push({
      username: "sigmamale",
      selected: false,
      status: {
        type: "online",
        text: "im so cool",
      },
    });
  }

  // ui stuff
  const [navOpen, setNavOpen] = useState(false);
  const [navSelected, setNavSelected] = useState(1);
  const [initialUsers, setUsers] = useState(users);
  const addRef = useRef(null);

  useEffect(() => {
    addRef.current?.addEventListener("click", function () {
      users = [
        {
          username: "new user (" + Math.floor(Math.random() * 10) + ")",
          selected: false,
          status: {
            type: "online",
            text: "lil bro",
          },
        },
        ...users,
      ];
      setUsers(users);
    });
  }, [addRef]);

  return (
    <motion.div
      variants={fromLeft}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex main bg-[url('/bgidk.png')] bg-cover"
    >
      <motion.div
        variants={fromLeft}
        className={`flex left-0 w-24 graygray bg-orange-900 items-center flex-col h-screen`}
      >
        <motion.button onClick={(e) => setNavOpen(!navOpen)}>
          <iconify-icon
            icon="cil:hamburger-menu"
            width="23"
            class="iconBtn fg-grey mb-4 mt-5 text-red-500"
            height="23"
          ></iconify-icon>
        </motion.button>
        <hr className="w-full border-solid border linegrey" />

        <div
          className="selectOverlay transition-all duration-500"
          style={{ top: navSelected * 73, width: navOpen ? 500 : 110 }}
        ></div>
        <motion.button
          onClick={(e) => setNavSelected(1)}
          className={`h-12 mt-5 ${navSelected == 1 && "selectedBtn"}`}
        >
          <iconify-icon
            icon="material-symbols:home-outline"
            class="iconBtn fg-grey"
            width="23"
            height="23"
          ></iconify-icon>
        </motion.button>

        <motion.button
          onClick={(e) => setNavSelected(2)}
          className={`mt-5 h-12 ${navSelected == 2 && "selectedBtn"}`}
        >
          <iconify-icon
            icon="ph:users-four-bold"
            class="iconBtn fg-grey"
            width="23"
            height="23"
          ></iconify-icon>
        </motion.button>

        <motion.button
          onClick={(e) => setNavSelected(3)}
          className={`mt-5 h-12 ${navSelected == 3 && "selectedBtn"}`}
        >
          <iconify-icon
            icon="material-symbols:mail-outline"
            class="iconBtn fg-grey"
            width="23"
            height="23"
          ></iconify-icon>
        </motion.button>
      </motion.div>

      <motion.div
        style={{ width: navOpen ? 700 : 0 }}
        className={`flex flex-col transition-width inline-blok duration-500 left-0 graygray leftMenu overflow-hidden`}
      >
        <div className="flex text-white z-0 ml-2 fg-grey items-center h-17">
          <h1 className="h-6 font-roboto cursor-pointer">Menu</h1>
        </div>
        <hr className="w-full border-solid z-0 border linegrey" />
        <div className="flex text-white z-0 ml-2 mt-5 fg-grey items-center h-12">
          <h1 className="h-6 font-roboto cursor-pointer">Home</h1>
        </div>
        <div className="flex text-white z-0 ml-2 mt-5 fg-grey items-center h-12">
          <h1 className="h-6 font-roboto cursor-pointer">Friends</h1>
        </div>
        <div className="flex text-white z-0 ml-2 mt-5 fg-grey items-center h-12">
          <h1 className="h-6 font-roboto cursor-pointer z-0">Mail</h1>
        </div>
        <motion.div
          variants={fromLeft}
          className={`bottom-0 left-0 inline-block absolute z-0 flex flex-col my-0 ml-[-2px] text-white ml-2 fg-grey h-auto items-center small-profile`}
          ref={nameRef}
        >
          <ProfileUser
            key={users[1].username}
            isOpen={navOpen}
            username={users[1].username}
            selected={users[1].selected}
            status={users[1].status}
          />
        </motion.div>
        {Profile}{" "}
      </motion.div>

      <motion.div
        variants={fade}
        className="flex flex-col px-3 items-center w-96 h-screen acrylic"
      >
        <div className="w-full mt-4 h-11 rounded-lg acrylic searchBg flex flex-row items-center">
          <iconify-icon
            icon="material-symbols:search-rounded"
            class="fg-grey relative left-3 mr-5"
            width="23"
            height="23"
          ></iconify-icon>
          <input
            className="fg-grey border-0 max-w-[250px] border-transparent focus:border-transparent focus:ring-0 overflow-x-auto min-width bg-transparent focus:outline-none overflow-y-hidden whitespace-nowrap font-roboto placeHolderText"
            placeholder="Search..."
          />
          <div className="keybindBlock w-14 h-6 items-center ml-auto justify-center flex rounded mr-3">
            <p className="text-sm font-boldroboto">Ctrl K</p>
          </div>
        </div>

        <hr className="w-80 mt-4 border-solid border linegrey relative" />
        <div className="w-full flex px-2 items-center mt-5">
          <h1 className="font-boldroboto text-sm darkgrey">DIRECT MESSAGES</h1>

          <button
            data-tooltip-target="tooltip-default"
            data-tooltip-placement="left"
            data-tooltip-style="light"
            type="button"
            class="font-zsans darkgrey right-0 absolute mr-7 cursor-pointer text-lg"
            ref={addRef}
          >
            +
          </button>

          <div
            id="tooltip-default"
            data-tooltip-style="light"
            role="tooltip"
            class="absolute z-10 invisible font-vsans inline-block px-3 py-2 text-sm text-white bg-black rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Create new DM
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>

        <div className="overflow-x-hidden overflow-scroll h-full w-full flex mt-2 flex-col items-stretch">
          {initialUsers.map((user) => {
            return (
              <User
                key={user.username}
                username={user.username}
                selected={user.selected}
                status={user.status}
              />
            );
          })}
        </div>
      </motion.div>

      <motion.div className="flex flex-col items-center w-full h-full">
        <motion.div
          variants={fromLeft}
          className="w-full flex items-center h-[50px] shadow-slate-100 z-10 graygray border-b-[1px] border-zinc-900"
        >
          <Title navSelected={navSelected} />
        </motion.div>
        <div class="bg-orange-500 graygray mt-[0px] max-h-[100%] h-[100%] overflow-auto flex items-center flex-col mt-1 w-full">
          {c === "Social" && (
            <>
              <div className="w-full flex flex-col px-3 items-center w-96 h-screen bg-transparent">
                <motion.div className="w-full mt-4 h-11 rounded-lg acrylic searchBg flex flex-row items-center">
                  <iconify-icon
                    icon="material-symbols:search-rounded"
                    class="fg-grey relative left-3 mr-5"
                    width="23"
                    height="23"
                  ></iconify-icon>
                  <input
                    className="fg-grey bg-transparent w-full border-transparent focus:border-transparent focus:ring-0 font-roboto placeHolderText"
                    placeholder="Search..."
                  />
                  <div className="keybindBlock w-14 h-6 items-center ml-auto justify-center flex rounded mr-3">
                    <p className="text-sm font-boldroboto">Ctrl K</p>
                  </div>
                </motion.div>
              </div>

              <p class="text-gray-400 mt-1 rounded-md w-[95%] min-h-[56px] flex items-center">
                ONLINE —{" "}
                {
                  initialUsers.filter((item) => item.status.type === "online")
                    .length
                }
              </p>

              {initialUsers.map((user) => (
                <>
                  <span className="w-[90%] h-[0.9px] transform scale(0.8) bg-zinc-700">
                    &nbsp;
                  </span>
                  <User
                    key={user.username}
                    username={user.username}
                    selected={false}
                    status={user.status}
                  />{" "}
                </>
              ))}
            </>
          )}
          {c === "Mail" && (
            <>
              <div className="w-full flex flex-col px-3 items-center w-96 h-screen bg-transparent">
                <motion.div className="w-full mt-4 h-11 rounded-lg acrylic searchBg flex flex-row items-center">
                  <iconify-icon
                    icon="material-symbols:search-rounded"
                    class="fg-grey relative left-3 mr-5"
                    width="23"
                    height="23"
                  ></iconify-icon>
                  <input
                    className="fg-grey bg-transparent w-full border-transparent focus:border-transparent focus:ring-0 font-roboto placeHolderText"
                    placeholder="Search..."
                  />
                  <div className="keybindBlock w-14 h-6 items-center ml-auto justify-center flex rounded mr-3">
                    <p className="text-sm font-boldroboto">Ctrl K</p>
                  </div>
                </motion.div>
              </div>

              <p class="text-gray-400 mt-1 rounded-md w-[95%] min-h-[56px] flex items-center">
                ONLINE —{" "}
                {
                  initialUsers.filter((item) => item.status.type === "online")
                    .length
                }
              </p>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
