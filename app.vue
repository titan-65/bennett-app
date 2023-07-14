<script setup lang="ts">

useHead({
  // title: 'Vantol Bennett | Mashed Potato Studios',
   titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Vantol Bennett` : "Vantol Bennett";
  },
  meta: [
    {
      name: 'description',
      content: 'The best way to write code all day... is by doing it! Evolve with innovation with innovation.'
    },
    {
      name: 'keywords',
      content: 'nuxt 3, vue, nuxt content'
    },
    {
      name: 'author',
      content: 'Vantol Bennett'
    },

  ]
})
useSeoMeta({
  title: 'Vantol Bennett | Mashed Potato Studios',
  description: 'The best way to write code all day... is by doing it! Evolve with innovation with innovation.',
  ogTitle: 'Vantol Bennett | Mashed Potato Studios',
  ogDescription: 'The best way to write code all day... is by doing it! Evolve with innovation with innovation.',
  ogImage: 'https://res.cloudinary.com/ddszyeplg/image/upload/v1674321473/nuxt-vantol/VantoBennett_kmmupu.png'
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>

</style>