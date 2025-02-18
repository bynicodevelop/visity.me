// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  nitro: {
    firebase: {
      gen: 2
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/test-utils/module', '@nuxt/image', '@vesp/nuxt-fontawesome', '@nuxt/eslint'],
  css: ['~/assets/styles.scss'],
  vite: {
    css: {
      preprocessorMaxWorkers: true,
    }
  },
  app: {
    rootAttrs: {
      class: "h-full"
    },
    head: {
      htmlAttrs: {
        class: "h-full"
      },
      bodyAttrs: {
        class: "h-full"
      },
    },
  },
  fontawesome: {
    icons: {
      brands: ['x-twitter', 'facebook', 'instagram', 'youtube', 'tiktok', 'telegram']
    }
  },
  runtimeConfig: {
    public: {
      siteName: 'Visity.me',
      copyRightDate: '2024'
    }
  },
})
