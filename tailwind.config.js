/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,cjs,mjs,ts,html}",
    "./components/**/*.{js,cjs,mjs,ts,html}",
    "./pages/**/*.{js,cjs,mjs,ts,html}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(../public/image/Hero/backgroundhero.jpg)",
        heroDesk: "url(../public/image/Hero/backgroundhero-desk.jpg)",
        gallaryBg: "url(../public/image/Gallery/gallery-bg.jpg)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
