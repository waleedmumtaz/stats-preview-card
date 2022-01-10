const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            'dark-blue': 'hsl(233, 47%, 7%)',
            'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
            'soft-violet': 'hsl(277, 64%, 61%)',
          },
          neutral: {
            'transparent-white-paragraph': 'hsla(0, 0%, 100%, 0.75)',
            'transparent-white-stat-headings': 'hsla(0, 0%, 100%, 0.6)',
          },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
