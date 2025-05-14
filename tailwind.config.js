/** @type {import('tailwindcss').Config} */
@import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap');

.font-urdu {
  font-family: 'Noto Nastaliq Urdu', serif;
  line-height: 2;
  direction: rtl;
}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#10B981",
        dark: "#1F2937",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 
