/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "1%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-200%)" },
        },
      },
      animation:{
        scroll: "scroll 40s linear infinite"
      },
      fontFamily: {
        grotesk: ["CabinetGrotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
