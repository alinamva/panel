/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightBlue: "#1d1d42",
        lightGreen: "#e8f9ee",
        lightRed: "#fdeaee",
        lightOrange: "#fef4e8",
        lightBlue: "#eaf1ff",
        mainText: "#ffff",
        lightGrey: "#f8f8f8",
        grey: "#808080",
        destructive: "#7f1d1d",
      },
    },
  },
  plugins: [],
};
