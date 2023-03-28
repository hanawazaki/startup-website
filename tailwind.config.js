/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cstGreen': '#74C69D',
        'cstBlack': '#212529'
      },
      spacing: {
        '70': '70px',
        '132': "132px"
      },
      fontSize: {
        '40': '40px',
        '32': '32px',
        '28': '28px',
        '24': '24px',
        '20': '20px',
        '16': '16px',
        '15': '15px',
      },
      lineHeight: {
        '125': '125%'
      },
      fontFamily: {
        'crimson-text': '"Crimson text", serif',
        'work-sans': '"Work Sans", sans-serif'
      },
      letterSpacing: {
        '5': '5px'
      }

    }
  },
  plugins: [],
}
