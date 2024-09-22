/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
     extend: {
      fontFamily: {
        Lexend: ['"Lexend", sans-serif'],
      },
  },
},
  plugins: [
    require('daisyui'),
  ],
};