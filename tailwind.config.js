/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      white: "#fcf0ee",
      gray: "#303246",
      primary: { DEFAULT: "#975f59", light: "#dfb19a" },
      secondary: { DEFAULT: "#e3906d", light: "#fbc773" },
    },
  },
  plugins: [],
};
