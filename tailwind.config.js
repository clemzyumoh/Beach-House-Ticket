/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your React components
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-sides-bottom":
          "0 4px 6px -1px rgba(121, 71, 223, 0.5), 3px 3px 6px -2px rgba(121, 71, 223, 0.2)",
      },
    },
  },
  plugins: [],
};
