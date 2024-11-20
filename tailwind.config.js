/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity:"0" },
          "100%": { transform: "translateX(0%)", opacity:"1" },
          // dream 
          //  if you were to manage you time: 2days a week: how much
          // an ideal pay 
          // our web- social media
          // supervising, design
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-200%)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        slideIn:"slideIn 3s ease-in-out"
      },
      fontFamily: {
        grotesk: ["CabinetGrotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
