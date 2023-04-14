/** @type {import('tailwindcss').Config} */
export default {

  daisyui: {
    themes: false,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Thin': ['Font_Thin'],
      'Light': ['Font_Light'],
      'Regular': ['Font_Regular'],
      'Bold': ['Font_Bold'],
      'SemiBold': ['Font_SemiBold'],
    },
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
}