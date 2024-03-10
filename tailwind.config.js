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
        "unity-yellow": {
          "600": "var(--unity-yellow)",
        },
        "unity-green": {
          "600": "var(--unity-green)",
        },
        "unity-purple": {
          "600": "var(--unity-purple)",
        },
        "unity-red": {
          "600": "var(--unity-red)",
        },
        "primary": {
          "500": "var(--accent)",
          "800": "#0c292d",
        },
      },
    },
  },
  plugins: [
    tailwindDebugScreens,
    tailwindScrollbar,
  ],
};
