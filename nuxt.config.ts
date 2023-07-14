// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxthq/ui', '@nuxt/image', 'nuxt-graphql-client', '@nuxt/content'],
// @ts-ignore

  runtimeConfig: {
    public: {
      GQL_HOST: process.env.NUXT_PUBLIC_GQL_HOST,
    }
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark'
    }
  }
})
