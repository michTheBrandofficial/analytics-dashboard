/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Jakarta_Sans": ["Jakarta Sans", "sans-serif"],
        "Inter": ["Inter", "sans-serif"]
      },
      backgroundColor: {
        'bg_1': "#F7F8FA",
      },
      borderColor: {
        'border_1': "#EBECF2",
        'border_2': "#EDF2F7",
        'border_3': "#DADDDD",
        'border_4': "#EDF2F6"
      },
      textColor: {
        'text_1': "#26282C",
        'text_2': "#787486",
        'text_3': "#26282C",
        'text_4': "#34CAA5",
        'text_5': "#9CA4AB",
        'text_6': '#3A3F51',
        'text_7': '#737373',
        'text_8': '#0D062D',
        'text_9': '#ED544E',
      }
    },
  },
  plugins: [],
}