/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px'
      },
      colors: {
        'purple-main': '#2D46B9',
        'green-main': '#1ED760',
        'hoverspt': '#18D760',
      },
      backgroundImage: {
        'hero-mobile': "url('../image/bursts-mobile.svg')",
        'hero-desktop': "url('../image/bursts.svg')",
      },
      fontSize: {
        '9xl': '9rem'
      },
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xs: '1rem',
          sm: '1rem',
          md: '2rem',
          lg: '2rem',
          xl: '2rem',
          xxl: '2rem',
        },
        screens: {
          xs: '100%',
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          xxl: '1320px',
        },
      },
    },
  },
  plugins: [],
}
