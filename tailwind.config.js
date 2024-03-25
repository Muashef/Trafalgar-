/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        prey: "linear-gradient(90deg, #67C3F3, #5A98F2)",
      },
    },
  },
  plugins: [],
}

