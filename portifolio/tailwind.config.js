/** @type {import('tailwindcss').Config} */
// Paleta de cores e efeitos visuais vivem em src/index.css (CSS variables) e
// src/App.css, não aqui — este arquivo cuidava de um tema (primary/accent/...)
// que nunca chegou a ser usado por nenhum componente.
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
