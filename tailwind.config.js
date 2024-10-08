/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.25)',  
        'lg': '4px 4px 6px rgba(0, 0, 0, 0.3)',  
        'none': 'none',  
      },
      colors:{
        grey: {
          DEFAULT: '#e2e8f0', 
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [ 
    function ({ addUtilities }) {
    const newUtilities = {
      '.text-shadow': {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',  // Default text shadow
      },
      '.text-shadow-lg': {
        textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',  // Large text shadow
      },
      '.text-shadow-none': {
        textShadow: 'none',  // No text shadow
      },
      '.hover\\:text-shadow': {
          '&:hover': {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow on hover
          },
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  },],
};
