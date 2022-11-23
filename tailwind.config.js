/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
        dark:{
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#3A4256",
          neutral: "#fff",
          'base-100': "#1f2937"
        }
      },
      
      "cupcake",
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
