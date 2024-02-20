import tailwindScrollbar from "tailwind-scrollbar";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindDebugScreens from "tailwindcss-debug-screens";

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
          DEFAULT: '#254276',
          'light': '#41547b',
          'dark': '#0b2351',
        },
        'accent': '#f5f5f5',
      },
    },
  },
  plugins: [
    tailwindDebugScreens,
    tailwindScrollbar,
  ],
};
