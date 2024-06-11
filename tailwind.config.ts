import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "sea-green": {
          DEFAULT: "#2B8663",
          50: "#8EDBBD",
          100: "#7ED6B4",
          200: "#60CCA2",
          300: "#41C290",
          400: "#35A57A",
          500: "#2B8663",
          600: "#1D5C44",
          700: "#103124",
          800: "#020705",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
};
