/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio'; // <-- Use ESM import syntax for the plugin

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1193d4",
        "background-light": "#f6f7f8",
        "background-dark": "#101c22",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"
      },
    },
  },
  // Use the imported variable here
  plugins: [aspectRatio], 
}