// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
        // => @media (min-width: 480px) { ... }
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
