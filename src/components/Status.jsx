import React from "react";
import ReactDOM from "react-dom";

export default function Status({ status = status.replaceAll(" ", "") }) {
  let type;
  console.log(status.length);
  switch (status) {
    case "dnd":
      type = (
        <svg
          width="100"
          height="100"
          viewBox="0 0 9 45"
          class="mask__1979f svg_f5b652"
          aria-hidden="true"
        >
          <mask id=":r4:" width="32" height="32">
            <circle cx="16" cy="16" r="16" fill="white"></circle>
            <rect
              color="black"
              x="19"
              y="19"
              width="16"
              height="16"
              rx="8"
              ry="8"
            ></rect>
          </mask>
          <foreignObject x="0" y="0" width="50" height="50" mask="url(#:r4:)">
            <div className={`userpfp ml-3 online-status`} />
          </foreignObject>
          <svg
            x="14.5"
            y="17"
            width="25"
            height="15"
            viewBox="0 0 25 15"
            class="cursorDefault_e4f616"
          >
            <mask id=":r5:">
              <rect
                x="7.5"
                y="5"
                width="10"
                height="10"
                rx="5"
                ry="5"
                fill="white"
              ></rect>
              <rect
                x="8.75"
                y="8.75"
                width="7.5"
                height="2.5"
                rx="1.25"
                ry="1.25"
                fill="black"
              ></rect>
              <polygon
                points="-2.16506,-2.5 2.16506,0 -2.16506,2.5"
                fill="black"
                transform="scale(0) translate(13.125 10)"
                style={{ "transform-origin": "13.125px 10px" }}
              ></polygon>
              <circle fill="black" cx="12.5" cy="10" r="0"></circle>
            </mask>
            <rect
              fill="#f23f43"
              width="25"
              height="15"
              mask="url(#:r5:)"
            ></rect>
          </svg>
          <rect
            x="22"
            y="22"
            width="10"
            height="10"
            fill="transparent"
            aria-hidden="true"
            class="pointerEvents__33f6a"
          ></rect>
        </svg>
      );
      break;
    case "online":
      type = (
        <div
          class={`user-pfp ${status}`}
          alt=" "
          aria-hidden="true"
        />
      );
      break;
    case "away":
      type = (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          class="mask__1979f svg_f5b652"
          aria-hidden="true"
        >
          <mask id=":r4:" width="32" height="32">
            <circle cx="16" cy="16" r="16" fill="white"></circle>
            <rect
              color="black"
              x="19"
              y="19"
              width="16"
              height="16"
              rx="8"
              ry="8"
            ></rect>
          </mask>
          <foreignObject x="0" y="0" width="50" height="50" mask="url(#:r4:)">
            <div class="avatarStack__6604a">
              <div
                class="pfp user-pfp w-10 h-10"
                src="https://cdn.discordapp.com/avatars/457211156621295616/9e9c3a9a0ca434a846f89c8db6489680.webp?size=24"
                alt=" "
                aria-hidden="true"
              />
            </div>
          </foreignObject>
          <svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15">
            <rect
              fill="#f0b232"
              width="25"
              height="15"
              mask="url(#:r3:)"
            ></rect>
            <mask id=":r3:">
              <rect
                x="7.5"
                y="5"
                width="10"
                height="10"
                rx="5"
                ry="5"
                fill="white"
              ></rect>
              <rect
                x="6.25"
                y="3.75"
                width="7.5"
                height="7.5"
                rx="3.75"
                ry="3.75"
                fill="black"
              ></rect>
              <polygon
                points="-2.16506,-2.5 2.16506,0 -2.16506,2.5"
                fill="black"
                transform="scale(0) translate(13.125 10)"
                style={{ "transform-origin": "13.125px 10px" }}
              ></polygon>
              <circle fill="black" cx="12.5" cy="10" r="0"></circle>
            </mask>
          </svg>
        </svg>
      );
      break;
  }
  return type;
}
