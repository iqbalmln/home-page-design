// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Landing Page | Tlab',
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo']
})
