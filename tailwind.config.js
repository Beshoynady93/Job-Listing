/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        neutral: {
          lightGrayishCyanBG: 'hsl(180, 52%, 96%)',
          lightGrayishCyanFT: 'hsl(180, 31%, 95%)',
          darkGrayishCyan: 'hsl(180, 8%, 52%)',
          veryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
        },
      },
      fontFamily: {
        heading: 'League Spartan, sans-serif',
        body: 'Inter, sans-serif;',
      },
      fontWeight: {
        regular: 500,
        bold: 700,
      },
    },
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
    backgroundImage: {
      bgHeaderMobile: `url('assets/images/bg-header-mobile.svg')`,
      bgHeaderDesktop: `url('assets/images/bg-header-desktop.svg')`,
    },
  },
  plugins: [],
};
