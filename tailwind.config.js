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
    },
  },
  plugins: [
    tailwindDebugScreens,
    tailwindScrollbar,
  ],
};
