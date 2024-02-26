import tailwindScrollbar from "tailwind-scrollbar";
import tailwindDebugScreens from "tailwindcss-debug-screens";
import defaultTheme from "tailwindcss/defaultTheme";

/**
 * @type {import("tailwindcss").Config}
 */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "420px",
      ...defaultTheme.screens,
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        'background': {
          DEFAULT: '#dcdcdc',
          'light': '#dcdcdc',
          'dark': '#212121',
        },
        'text': {
          DEFAULT: '#000',
          'light': '#000',
          'dark': '#767676',
        },
        'accent': "#65acb4",
      },
    },
  },
  plugins: [
    tailwindDebugScreens,
    tailwindScrollbar,
  ],
};
