// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },

  components: [
    { path: '~/components/ui', prefix: 'Cms' },
    '~/components'
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    'v-wave/nuxt',
    'nuxt-snackbar'
  ],

  snackbar: {
    bottom: true,
    duration: 5000
  },

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    passwordSpice: process.env.PASSWORD_SPICE
  },

  css: ['@/assets/styles/global.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/styles/functions.scss" as *;' +
              '@use "@/assets/styles/variables.scss" as *;'
        }
      }
    }
  }
})
