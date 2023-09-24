/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#472692",
        secondary: "#FFD800",
        base: "#18181B",
        greyshade: "#404040",
        lightpurple: "#5c488e",
        // ...
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
