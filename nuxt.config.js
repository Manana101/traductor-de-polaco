import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

const { VuetifyProgressiveModule } = require('vuetify-loader')

export default {
  mode: 'spa',
  generate: {
    fallback: true,
  },
  sitemap: {
    generate: true,
    hostname: 'http://traductordepolaco.eu',
    exclude: ['/politica-de-privacidad'],
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Traductor e Intérprete de polaco Olga Niebieszczańska',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Traducción de polaco y español, interpretación simultánea de polaco en cabina, interpretación consecutiva y de enlace en eventos y reuniones de negocios.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'traductor de polaco, intérprete de polaco, interpretación simultánea de polaco, traducción de polaco, traductor de polaco en Valencia, intérprete de polaco en Valencia',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        defer: true,
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons&font-display=swap',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@bazzite/nuxt-optimized-images', '@nuxtjs/sitemap'],

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl'],
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(
      config,
      {
        isClient,
        loaders: { vue },
      }
    ) {
      if (isClient) {
        // Need to tell webpack not to include images that are being
        // used with vuetify-preload with the url-loader
        config.module.rules
          .filter(v => v.test.toString().includes('png'))
          .map(v => (v.exclude = /\.(png|jpe?g|gif)$/))

        /*
          The following code will use the vuetify-loader/progressive-loader
          to automatically generate base64 images to load before loading the
          fullsize image.

          WARNING: You -MUST- have imagemagick installed for this to work
        */
        config.module.rules.push({
          test: /\.(png|jpe?g|gif)$/,
          resourceQuery: /lazy\?vuetify-preload/,
          use: [
            'vuetify-loader/progressive-loader',
            {
              loader: 'url-loader',
              options: { limit: 8000 },
            },
          ],
        })
      }
    },
  },
}
