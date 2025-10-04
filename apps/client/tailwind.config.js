/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(250 250 250)",
        foreground: "rgb(15 23 42)",
        muted: "rgb(241 245 249)",
        card: "rgb(255 255 255)"
      }
    }
  },
  darkMode: "class",
  plugins: [],
};
