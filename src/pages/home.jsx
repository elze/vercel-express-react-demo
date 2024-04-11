import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";

export default () => {
  var darkRef = React.useRef(null);
  var vixRef = React.useRef(null);

  var html = `
  <div class="absolute rounded-[20px] left-[50%] transform translate-x-[-50%] bottom-[10%] flex h-14 w-full min-w-[200px] max-w-[24rem]">
  <button
    class="!absolute right-1 top-1 z-10 select-none rounded bg-[var(--signup)] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none focus:outline-none outline-0 outline-transparent active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
    type="button"
    data-ripple-light="true"
  >
    Signup
  </button>
  <input
    type="email"
    class="peer h-full w-full rounded-[20px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[var(--signup)] focus:border-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder=" "
    required
  />
  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[var(--signup)] peer-focus:text-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[var(--signup)] peer-focus:text-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[var(--signup)] peer-focus:border-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Email Address
  </label>
</div>


  `;
  return (
    <>
      <div class="vl-n">

        <div class="vl-n-h">
          <h4 class="v-link mt-10 transition-all text-[rgb(156,163,175)]">Discover</h4>
        </div>
      </div>
      <h4 class="features">Features</h4>

      <div class="grid">
        <div class="card">
          <span class="icon">
            <svg
              viewBox="0 0 512 512"
              fill="#ccc"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
            </svg>
          </span>
          <h4>Speed</h4>
          <p>
         To guarantee that even the tiniest events are aired as quickly as possible, Vixcord uses high-speed,
 {" "}
            <code class="v-inline-c">
              <span class="inline v-link">socket.io</span>
            </code>{" "}
            broadcasting. Don't worry, Dad won't forget the milk again <span class="inline-emoji">😉</span>{" "}
          </p>
          <div class="shine"></div>
          <div class="background">
            <div class="tiles">
              <div class="tile tile-1"></div>
              <div class="tile tile-2"></div>
              <div class="tile tile-3"></div>
              <div class="tile tile-4"></div>

              <div class="tile tile-5"></div>
              <div class="tile tile-6"></div>
              <div class="tile tile-7"></div>
              <div class="tile tile-8"></div>

              <div class="tile tile-9"></div>
              <div class="tile tile-10"></div>
            </div>

            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
        </div>
        <div class="card">
          <span class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#ccc"
              stroke="currentColor"
              strokeWidth="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
            </svg>
          </span>
          <h4>Servers</h4>
          <p>
            Using accustomed MySQL tables, {"  "}
            <code class="v-inline-c">
              <h4 class="inline v-link">Vixcord</h4>
            </code>{" "}
            can easily save user-made servers, publicly or privately.
            <code class="v-inline-c">
              <h4 class="inline v-link">Vixcord</h4>
            </code>{" "}
            is perfect for hanging out with friends!
          </p>
          <div class="shine"></div>
          <div class="background">
            <div class="tiles">
              <div class="tile tile-1"></div>
              <div class="tile tile-2"></div>
              <div class="tile tile-3"></div>
              <div class="tile tile-4"></div>

              <div class="tile tile-5"></div>
              <div class="tile tile-6"></div>
              <div class="tile tile-7"></div>
              <div class="tile tile-8"></div>

              <div class="tile tile-9"></div>
              <div class="tile tile-10"></div>
            </div>

            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
        </div>
      </div>
      

      <section dangerouslySetInnerHTML={{ __html: html }}></section>
      <label class="day-night">
        <input type="checkbox" ref={darkRef} checked />
        <div></div>
      </label>
    </>
  );
};
