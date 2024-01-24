/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-1': "#F7F8FA",
      },
      borderColor: {
        'border-1': "#EBECF2",
        'border-2': "#EDF2F7"
      }
    },
  },
  plugins: [],
}