/** @type {import('tailwindcss').Config} */
export default {
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
    borderRadius: {
      '6top': '6px 6px 0 0 '
    },
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
}