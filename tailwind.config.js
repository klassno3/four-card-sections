/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mb: "375px",
      tb: "620px",
      ltb: "980px",
      dt: "1200px",
    },
    extend: {
      colors: {
        Red: "hsl(0, 78%, 62%)",
        Cyan: "hsl(180, 62%, 55%)",
        Orange: "hsl(34, 97%, 64%)",
        Blue: "hsl(212, 86%, 64%)",
        VeryDarkBlue: "hsl(234, 12%, 34%)",
        GrayishBlue: "hsl(229, 6%, 66%)",
        VeryLightGray: "rgb(252, 249, 249)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
