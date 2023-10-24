/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'boy-with-dog': "url('assets/boy-with-dog.jpg')",
      },
    },
    colors: {
      primary_blue: '#86D3F4',
      primary_black: '#000000',
      primary_white: '#FFFFFF',
      primary_gray: '#565656',
      accent_red: '#EA0000',
    },
  },
  plugins: [],
};
