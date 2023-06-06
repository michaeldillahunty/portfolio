/** @type {import('tailwindcss').Config} */
export default {
  // specify css font rules
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      }
    },
  },
  plugins: [],
}

