/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake", "forest"],
    prefix: "daisy-",
  },
  plugins: [require("daisyui")],
}

