/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          dark: '#1a1a1a',
          steel: '#DC143C',
          accent: '#DC143C',
          light: '#FFFFFF',
          red: {
            primary: '#DC143C',
            dark: '#B71C1C',
            light: '#FF6B6B',
          },
        },
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
