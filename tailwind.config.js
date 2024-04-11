/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        grapenuts: ["Grape Nuts", "cursive"],
        habibi: ["Habibi", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        robotoregular: ["RobotoRegular", "sans-serif"],
        boldroboto: ["RobotoBold", "Noto Sans"],
        "vsans": ['Vixcord Sans']
      },
      transitionProperty: {
        width: "width",
      },
      spacing: {
        17: "65px",
      },
      fontSize: {
        xxs: "11px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};

