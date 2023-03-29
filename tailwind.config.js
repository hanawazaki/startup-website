/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cstGreen': '#74C69D',
        'cstBlack': '#212529',
        'cstGrey': '#EEEEEE',
      },
      spacing: {
        '2.5': '2.5rem',
        '10': '10px',
        '18': '18px',
        '21': '21px',
        '30': '30px',
        '50': '50px',
        '52': '52px',
        '70': '70px',
        '106': '106px',
        '120': '120px',
        '130': "130px",
        '132': "132px",
        '230': '230px',
        '260': '260px',
        '356': '356px',
        '644': "644px"
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
      },
      boxShadow: {
        'card': '3px 4px 12px 1px rgba(0, 0, 0, 0.25);'
      },
      borderRadius: {
        '5': '5px'
      }

    }
  },
  plugins: [],
}
