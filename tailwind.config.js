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
          'light': '#FFFFFF',
          'dark': '#FFFFFF',
        },
        'text': '#000000',
      },
    },
  },
  plugins: [
    tailwindDebugScreens,
    tailwindScrollbar,
  ],
};
