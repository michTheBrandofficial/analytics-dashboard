/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        bsm: {
          min: '480px'
        },
        xl: "1440px"
      },
      fontFamily: {
        "Jakarta_Sans": ["Jakarta Sans", "sans-serif"],
        "Inter": ["Inter", "sans-serif"]
      },
      colors: {
        grad_1000: "#34CAA5",
        grad_10: "#34CAA51A",
        grad_0: "#34CAA500"
      },
      backgroundColor: {
        'bg_1': "#F7F8FA",
        'bg_2': "#34CAA51F",
        'bg_3': '#ED544E1F',
        'bg_4': "#34CAA5",
        'gray': '#F5F5F5',
        'purple': '#6160DC',
        'blue': '#54C5EB',
        'orange': '#FFB74A',
        'red': '#FF4A55',
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
        'text_3': '#22242C',
        'text_4': "#34CAA5",
        'text_5': "#9CA4AB",
        'text_6': '#3A3F51',
        'text_7': '#737373',
        'text_8': '#0D062D',
        'text_9': '#ED544E',
        'text_10': '#525252',
        'text_11': '#898989',
      }
    },
  },
  plugins: [],
}