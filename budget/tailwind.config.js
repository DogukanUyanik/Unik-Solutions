// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floating: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(-1deg)',
          },
          '50%': {
            transform: 'translateY(-10px) rotate(-1deg)', // more dramatic float
          },
        },
      },
      animation: {
        floating: 'floating 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
