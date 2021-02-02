module.exports = {
  darkMode: 'class',
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        black: '#1a1b1f',
        grayCustom: '#222222'
      },
      textColor: {
        grayCustom: '#222222',
        black: '#1a1b1f'
      },
      backgroundColor: {
        black: '#1a1b1f',
        grayCustom: '#f4f4f4',
        dark: 'black'
      },
      outline: {
        grayCustom: '1px solid #222222',
        lightGray: '1px solid #f4f4f4',
        normal: '1px solid #e4e4e4',
        black: '1px solid #43464d'
      },
      lineHeight: {
        '20': '5rem'
      },
      height: {
        '460': '28.75rem'
      },
      screens: {
        'xs': '480px'
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'Arial', 'sans-serif']
    }
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.js',
      './nuxt.config.js',
    ]
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  future: {
    purgeLayersByDefault: true,
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
