<template>
  <div>
    <div>
      <h1 class="font-bold text-2xl mb-8 tracking-tight">Hi, I am V.</h1>
      <p class="prose prose-neutral dark:prose-invert">I'm a frontend developer, optimist, and community builder. I currently work at <a href="" target="_blank" rel="noopener noreferrer">Mashed Potato Studios</a> as a Senior Frontend Developer. I'm also the founder of <a href="" target="_blank" rel="noopener noreferrer">Zhyjenae</a>, a community for teaching and training young people (christian or otherwise) to become developers - to connect and learn from each other.</p>
      <div class="columns-4 sm:columns-6 md:columns-5 gap-4 my-8">
          <div class="relative h-80 mb-4">
            <nuxt-img src="/me_me.jpeg" class="abs rounded-lg"/>
          </div>
        <div class="relative h-40 mb-4 sm:mb-0">
          <nuxt-img src="/math_dep.jpeg" fit="cover" class="absolute rounded-lg"/>
        </div>
        <div class="relative h-80 mb-4">
          <nuxt-img src="/project.jpg" fit="cover" class="absolute rounded-lg"/>
        </div>
        <div class="relative h-80 mb-4">
          <nuxt-img src="/cookie_recipe.jpg" class="absolute rounded-lg"/>
        </div>
        <div class="relative h-40 mb-4">
          <nuxt-img src="/stream_live.jpg" class="rounded-lg"/>
        </div>
        <div class="relative h-80">
          <nuxt-img src="/restja.jpg" class="rounded-lg"/>
        </div>
      </div>
      <div class="prose dark:text-gray-100">
        <p>
          I am a self-taught developer who has been working in the industry for over 10 years. I have worked with a variety of languages and frameworks, but I am currently focused on <span class="text-primary-400">Vue.js</span> and <span class="text-primary-700">Nuxt.js</span>. I am passionate about building accessible, performant, and delightful user experiences.
        </p>
      </div>

      <h2 class="font-medium mt-4 mb-8 text-3xl">Social Platforms</h2>

      <div>
         <div class="prose dark:text-gray-50">
           Streaming on <UBadge label="Twitch" color="purple">
            <a class="dark:text-gray-400 no-underline" href="https://www.twitch.tv/ceodevforce" target="_blank" rel="noopener noreferrer">twitch.tv/ceodevforce</a>
         </UBadge> and <UBadge label="Twitter" color="blue">
            <a class="dark:text-gray-400 no-underline" href="https://twitter.com/VantolBennett" target="_blank" rel="noopener noreferrer">twitter.com/VantoBennett</a>
         </UBadge>.
      </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

// const { data } = await useAsyncGql('article')
//
// console.log(data);
</script>