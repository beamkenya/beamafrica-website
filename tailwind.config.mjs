/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#4B275F',
        secondary: '#7B3B8C', 
        accent: '#9F5F9F',
        elixir: '#C96DDB',
        light: '#f8fafc',
        dark: '#1e293b'
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif']
      }
    }
  },
  plugins: [],
}
