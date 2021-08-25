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
      { hid: 'og:url', property: 'og:url', content: 'https://hamrouni.herokuapp.com'},
      { hid: 'og:site_name', property: 'og:site_name', content: 'Hamrouni Charfeddine Portfolio' },
      { hid: 'og:locale', property: 'og:locale', content: 'fr' },
      { hid: 'og:image', property: 'og:image', content: '/icon.png' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'Hamrouni Charfeddine Portfolio' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://hamrouni.herokuapp.com' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Hamrouni Charfeddine Portfolio' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Je m\'appelle Hamrouni Charfeddine. Je suis Graphiste et Développeur web.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/icon.png'}
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
    { src: '~/plugins/vue-aspect-ratio.js', mode: 'client' },
    { src: '~/plugins/vuelidate.js', mode: 'client' }
  ],

  render: {
    // HTTP2: https://nuxtjs.org/api/configuration-render/#http2
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
        .filter(f => f.asType === 'script' && f.file === 'runtime.js')
        .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    }
  },

  gsap: {
    extraPlugins: {
      /**
       * After activation, plugins are automatically
       * registered and available globally
       */
      tweenMax: true,
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module',
    // https://go.nuxtjs.dev/tailwindcss
    ['@nuxtjs/google-fonts',
      {
        families: {
          Montserrat: {
            wght: [300, 400, 500, 600]
          }
        },
        display: 'optional',
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
    'nuxt-polyfill',
    '@nuxtjs/pwa',
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxtjs/component-cache",
    '@nuxtjs/localtunnel',
    '~/modules/viewport-observer'
  ],

  polyfill: {
    features: [
      /*
          Feature without detect:

          Note:
            This is not recommended for most polyfills
            because the polyfill will always be loaded, parsed and executed.
      */
      {
        require: 'url-polyfill' // NPM package or require path of file
      },

      /*
          Feature with detect:

          Detection is better because the polyfill will not be
          loaded, parsed and executed if it's not necessary.
      */
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window,
      },

      /*
          Feature with detect & install:

          Some polyfills require a installation step
          Hence you could supply a install function which accepts the require result
      */
      {
        require: 'smoothscroll-polyfill',

        // Detection found in source: https://github.com/iamdustan/smoothscroll/blob/master/src/smoothscroll.js
        detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,

        // Optional install function called client side after the package is required:
        install: (smoothscroll) => smoothscroll.polyfill()
      }
    ]
  },

  sitemap: {
    hostname: "https://hamrouni.herokuapp.com", // L'adresse de votre site, que vous pouvez placer comme ici dans une variable d'environnement.
    path: '/sitemap.xml', // L'emplacement de votre fichier sitemap.
    cacheTime: 1000 * 60 * 15, // La durée avant que le sitemap soit regénéré. Ici 15mn.
    gzip: true,
    generate: false, // Génère une version statique du sitemap quand activé. À utiliser avec nuxt generate.
    exclude: [] // Les pages qu'on a pas trop envie de voir atterrir sur Google.
  },

  robots: {
    UserAgent: "*",
    Disallow: "/",
    Sitemap: "https://hamrouni.herokuapp.com/sitemap.xml"
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  serverMiddleware: [
    '~/api/contact'
  ],

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
      description: "Je m'appelle Hamrouni Charfeddine. Je suis Développeur web Fullstack et Graphiste.",
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
      description: "Je m'appelle Hamrouni Charfeddine. Je suis Développeur web Fullstack et Graphiste.",
      background_color: '#1a1b1f',
      display: 'fullscreen'
    },
  },

  router: {
    linkExactActiveClass: 'font-semibold'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap']
  }
}
