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
    '@nuxt/image',
    'v-wave/nuxt'
  ],

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
