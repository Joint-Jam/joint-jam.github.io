import tailwindScrollbar from "tailwind-scrollbar";
import tailwindDebugScreens from "tailwindcss-debug-screens";
import defaultTheme from "tailwindcss/defaultTheme";
import defaultColors from "tailwindcss/colors";

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
        neutral: {
          ...defaultColors.neutral,
          "925": "#101010"
        }
      }
    },
  },
  plugins: [
    tailwindDebugScreens,
    tailwindScrollbar,
  ],
};
