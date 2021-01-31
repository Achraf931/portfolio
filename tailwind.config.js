module.exports = {
  theme: {
    darkSelector: '.light-mode',
    extend: {
      colors: {
        black: '#1a1b1f',
        grayCustom: '#222222'
      },
      backgroundColor: {
        black: '#1a1b1f'
      },
      lineHeight: {
        '20': '5rem'
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'Arial', 'sans-serif']
    }
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ]
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
