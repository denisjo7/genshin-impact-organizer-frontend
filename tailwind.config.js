/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": "2px 4px 3px 0px rgba(161, 161, 161, 1)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")]
};
