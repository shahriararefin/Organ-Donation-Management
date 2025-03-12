const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/Assets/background.png')",
      },
    },
  },
};
 
