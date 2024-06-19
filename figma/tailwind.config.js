/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/ui/index.html", "./src/ui/**/*.{js,ts,jsx,tsx,css,scss}"],
  theme: {
    extend: {
      colors:{
        primary:'#FF473B'
      }
    },
  },
  plugins: [],
};
