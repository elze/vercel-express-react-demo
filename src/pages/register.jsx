import React, { use, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const Password = ({ pwd, setPwd }) => {
  const [accessPassword, setAccessPassword] = useState("");
  const [error, setError] = useState(false);

  function checkPassword(e) {
    e.preventDefault();
    fetch("https://chat.catsarecool.tk/api/checkPassword", {
      method: "POST",
      body: JSON.stringify({ password: accessPassword }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        if (data === "true") {
          setPwd(true);
        } else {
          setError(true);
        }
      });
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={content}
      className="registerBox flex flex-col items-center px-16 transition-opacity duration-500"
    >
      <motion.h1
        variants={title}
        className="mt-10 text-white text-5xl font-grapenuts"
      >
        Password
      </motion.h1>
      {error ? (
        <motion.p variants={fade} className="text-xs text-red-600 font-habibi">
          Incorrect Password
        </motion.p>
      ) : (
        ""
      )}

      <form
        onSubmit={checkPassword}
        className="flex flex-col w-full items-center"
      >
        <input
          onChange={(e) => setAccessPassword(e.target.value)}
          value={accessPassword}
          type="password"
          className="cursor-text mt-8 w-full inputBg block transition duration-300 border-none text-white h-12 rounded-lg box-width"
        />
        <motion.button
          variants={fade}
          type="submit"
          className="center rounded-md h-12 mt-4 w-52 text-sm text-white font-grapenuts text-2xl transition duration-300 bg-zinc-700 hover:bg-zinc-800"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

const Register = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");

  const [userError, setUserError] = useState([false, ""]);
  const [passwordError, setPasswordError] = useState([false, ""]);

  function _register(e) {
    
    e.preventDefault();
     
    setPasswordError([!(password === confirm), "passwords do not match."]);

    if (userError[0] === false && passwordError[0] === false) {
    }
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={content}
      className="header h-1/2 flex flex-col px-20 items-center"
    >
      <motion.h1
        variants={title}
        className="mt-10 mb-5 text-6xl text-white font-roboto"
      >
        Register
      </motion.h1>
      <motion.p
        variants={title}
        className={
          "text-xs mt-30 font-roboto " +
          (userError[0]
            ? "text-red-500"
            : passwordError[0]
            ? "text-red-500"
            : "text-white")
        }
      >
        {userError[0]
          ? passwordError[0]
            ? `${userError[1]} and ${passwordError[1]}`
            : userError[1]
          : passwordError[0]
          ? passwordError[1]
          : "Create account"}
      </motion.p>

      <form onSubmit={_register} className="flex flex-col w-full items-center">
        <motion.div variants={title} className="mt-8 mx-1 w-full">
          <p className="font-grapenuts relative left-0 text-white">USERNAME:</p>
          <input
            onChange={(e) => setUser(e.target.value)}
            value={user}
            type="text"
            className={
              "rounded-lg cursor-text mt-1 w-full inputBg block transition duration-300 border-none text-white h-14 box-width " +
              (userError[0] ? "redFocus" : "")
            }
          />
        </motion.div>

        <motion.div variants={title} className="mt-5 mx-1 w-full">
          <p className="font-grapenuts relative left-0 text-white">PASSWORD:</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className={
              "rounded-lg cursor-text mt-1 w-full inputBg block transition duration-300 border-none text-white h-14 box-width " +
              (passwordError[0] ? "redFocus" : "")
            }
          />
        </motion.div>

        <motion.div variants={title} className="mt-5 mx-1 w-full">
          <p className="font-grapenuts relative left-0 text-white">
            CONFIRM PASSWORD:
          </p>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirm}
            type="password"
            className={
              "rounded-lg cursor-text mt-1 w-full inputBg block transition duration-300 border-none text-white h-14 box-width " +
              (passwordError[0] ? "redFocus" : "")
            }
          />
          <a
            href="/login"
            className="text-xs hover:text-gray-600 hover:underline transition-all text-gray-400"
          >
            Login
          </a>
        </motion.div>

        <motion.button
          variants={fade}
          type="submit"
          className="center rounded-md h-20 mt-12 w-80 text-sm text-white font-grapenuts text-4xl transition duration-300 bg-zinc-700 hover:bg-zinc-800"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default function Page() {
  const [correctPassword, setcpwd] = useState(true);
  return (
    <motion.div className="flex main justify-center items-center bg-[url('/backgrounds/bg.webp')] bg-cover">
      <AnimatePresence mode="wait">
        {correctPassword ? (
          <Register />
        ) : (
          <Password key="registerBox" pwd={correctPassword} setPwd={setcpwd} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
