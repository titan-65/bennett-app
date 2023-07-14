<script setup lang="ts">
const posts = await queryContent("posts").find();
console.log(posts);

// changeTitle function
/**
 *
 * @description Change the header of the page with a list of words that are passed in as an array everytime the page is loaded
 */

const changeHeader = (words: string[]) => {

  const word = words[Math.floor(Math.random() * words.length)];

}

useHead({
  title: 'Posts'
})

definePageMeta({
  title: 'Posts'
})
</script>
<template>
<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <div class="text-center">
        <h1
          class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"
        >
          Developer Mindset
        </h1>

        <p class="max-w-lg mx-auto mt-4 text-gray-500">
          The best way to write code all day... is by doing it! Evolve with innovation with innovation.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">

        <div
          v-for="(n, i) in posts"
          :key="`postItem-${n._path}-${i}`"
        >
          <img
            class="relative z-10 object-cover w-full rounded-md h-96"
            :src="n.src"
            alt=""
          />

          <div
            class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900"
          >
            <NuxtLink
              :to="n._path"
              class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
            >
              {{ n.title }}
            </NuxtLink>

            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {{ n.description }}
            </p>

            <p class="mt-3 text-sm text-blue-500">{{ n.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>