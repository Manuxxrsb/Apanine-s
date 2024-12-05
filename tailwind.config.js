/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-azul': '#030A8C',
        'custom-celeste': '#466FA6',
        'custom-verde': '#4EA641',
        'custom-amarillo': '#F2D43D',
        'custom-naranjo': '#F28A2E',
      },
    },
  },
  plugins: [],
};
