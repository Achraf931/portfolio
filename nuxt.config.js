export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'title', name: 'title', content: 'Hamrouni Charfeddine Portfolio' },
      { hid: 'description', name: 'description', content: 'Je m\'appelle Hamrouni Charfeddine. Je suis Graphiste et Développeur web.' },
      { hid: 'og:description', name: 'og:description', content: 'Je m\'appelle Hamrouni Charfeddine. Je suis Graphiste et Développeur web.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'Hamrouni Charfeddine Portfolio' },
      // { hid: 'og:url', property: 'og:url', content: 'https://sylphe.herokuapp.com'},
      { hid: 'og:site_name', property: 'og:site_name', content: 'Hamrouni Charfeddine Portfolio' },
      { hid: 'og:locale', property: 'og:locale', content: 'fr' },
      { hid: 'og:image', property: 'og:image', content: '/logo.webp' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'Hamrouni Charfeddine Portfolio' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      // { hid: 'twitter:url', name: 'twitter:url', content: 'https://sylphe.herokuapp.com' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Hamrouni Charfeddine Portfolio' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Je m\'appelle Hamrouni Charfeddine. Je suis Graphiste et Développeur web.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/logo.webp'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    ['@nuxtjs/google-fonts',
      {
        families: {
          Montserrat: {
            wght: [300, 400, 500, 600]
          }
        },
        display: 'fallback',
        base64: true,
        download: true
      }
    ],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  purgeCSS: {
    whitelist: ['dark-mode'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512],
      purpose: 'maskable'
    },
    meta: {
      title: 'Portfolio',
      author: 'Portfolio',
      short_name: "Portfolio",
      favicon: true,
      theme_color: 'black',
      description: "Je m'appelle Hamrouni Charfeddine. Je suis Graphiste et Développeur web.",
      mobileAppIOS: true,
      nativeUI: true,
      mobileApp: true,
      appleStatusBarStyle: 'default'
    },
    manifest: {
      lang: 'fr',
      name: 'Portfolio',
      short_name: 'Portfolio',
      app_name: 'Portfolio',
      scope: '/',
      start_url: '/',
      description: "Je m'appelle Hamrouni Charfeddine. Je suis Graphiste et Développeur web.",
      background_color: '#1a1b1f',
      display: 'fullscreen'
    },
  },

  router: {
    linkExactActiveClass: 'font-semibold'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
