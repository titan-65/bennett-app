<script setup lang="ts">
const slug = useRoute().params.slug.toString().replace(/,/g, '/')
console.log(slug)
const { data: post } = await useAsyncData(slug, () => {
  return queryContent('posts', slug).findOne()
})
console.log(post)
</script>
<template>
  <ClientOnly>
    <ContentRenderer class="prose prose-slate dark:text-gray-50 dark:prose-a:text-gray-50 dark:prose-headings:text-gray-200 " :value="post">
    <template #empty>
      <p>No content found!</p>
    </template>
    </ContentRenderer>
  </ClientOnly>
</template>
