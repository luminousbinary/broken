/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        everScale: {
          '0%': { transform: '' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: '  ' },
        },
        hoverAnimation: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }, // Adjust height as desired
        },
        hoverAnimationL: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' }, // Adjust height as desired
        },
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-200%)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        slideIn: "slideIn 3s ease-in-out",
        slideUp: "slideUp 3s ease-in-out",
        hover: 'hoverAnimation 1s infinite', // Name, duration, and repetition  
        everScale: 'everScale 2s ease-in-out infinite',
        hoverL: 'hoverAnimationL 2s infinite ', // Name, duration, and repetition  
      },
      fontFamily: {
        grotesk: ["CabinetGrotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
