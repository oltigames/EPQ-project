/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "discord-blue": "#5865F2",
        "discord-gray": "#363940",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
