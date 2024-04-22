import React, { use, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import supabase from "../utils/supabase.js";
import AuthContext from "../components/auth.jsx";
import { useNavigate } from "react-router-dom";
import Expire from "../components/Expire.js";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from "@supabase/auth-ui-shared";
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

const Register = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");

  const [userError, setUserError] = useState([false, ""]);
  const [passwordError, setPasswordError] = useState([false, ""]);
  function _rep(inp) {
    return inp
  }
  const { data } = supabase.auth.onAuthStateChange(state => {
    if (state === 'SIGNED_IN') {
    }
  });
  var [registered, setRegistered] = useState(false);
  var [register, setRegister] = useState(
    <>
      <h1 class="font-bold text-4xl font-sans leading-tight tracking-tight text-white">
        Create an account

      </h1>
      <form class="space-y-4 md:space-y-6" action="#" onSubmit={_register}>
        <Auth
          supabaseClient={supabase}

          providers={["github", "twitter"]}
          view="sign_up"
          appearance={{
            extend: true,
            theme: ThemeSupa, variables: {
              default: {
                colors: {
                  brand: 'rgb(55 48 163)',
                  brandAccent: "rgb(55 48 163)"
                },
              },
            }, 
            className: {
              label: ''
            },
            style: {
              button: { fontSize: "14px", "font-style": "bold", background: "rgb(30 31 34)", border: "none" },
              input: {
                fontWeight: "normal",
                background: "rgb(30 31 34)",
                color: "rgb(219 222 225)",
                border: "none",
                borderRadius: "3px"
              },
              anchor: { textDecoration: "none" },
              //..
            }

          }
          }

        />
      </form>
    </>
  );
  async function _register(e) {
    try {
      e.preventDefault();

      const { data, error } = await supabase.auth.signUp({
        email: user,
        password,
      });
      if (data) {
        setRegister(
          <Expire timeout={3000} onAnimationFinished={() => {
          }}>
            <div class="loader">
              {JSON.stringify(error)}
              <svg viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
              </svg>
            </div>

            <div class="loader triangle">
              <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
              </svg>
            </div>

            <div class="loader">
              <svg viewBox="0 0 80 80">
                <rect x="8" y="8" width="64" height="64"></rect>
              </svg>
            </div>

          </Expire>);
        setRegistered(true);
      }
      else if (error) {
        setRegister(
          <Expire timeout={3000} onAnimationFinished={() => {
            window.alert(1)
          }}>
            <div class="loader">
              <svg viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
              </svg>
            </div>

            <div class="loader triangle">
              <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
              </svg>
            </div>

            <div class="loader">
              <svg viewBox="0 0 80 80">
                <rect x="8" y="8" width="64" height="64"></rect>
              </svg>
            </div>

          </Expire>);
        setRegistered(true);
      }
    }
    catch (err) {
      alert(err);
    }
  }
  return (
    <>
      <div class="align-start absolute left-0 top-0 self-start font-bold justify-start w-full h-screen md:flex __register__form"  >
        <div
          class="relative  overflow-hidden md:flex w-1/2 header i justify-around items-center hidden">
          <div>
            <h1 class="text-white text-5xl font-bold font-sans">Vix<span class="text-[rgb(181,_186,_193)]">cord</span></h1>
            <p class="text-white mt-1 font-normal">Your entertainment is valued most</p>
            <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
          </div>
          <div class="absolute blur-lg -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -bottom-40 blur-lg -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div class="flex md:w-1/2 justify-center py-10 items-center bg-zinc-700 font-bold">
          <div class="absolute bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="w-full bg-[rgb(49,_51,_56)] z-10 font-bold rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class={`p-6 space-y-4 md:space-y-6 sm:p-8 font-bold ${registered && 'flex items-center justify-center'}`}>
              {register}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Page() {
  const [correctPassword, setcpwd] = useState(true);
  return (
    <motion.div className="flex main justify-center items-center bg-cover">
      <AnimatePresence mode="wait">
        <Register />
      </AnimatePresence>
    </motion.div>
  );
}
