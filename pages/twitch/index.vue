<script setup lang="ts">
// Fetch data from the Twitch API for videos
const twitchData = await useFetch()
</script>
<template>
  <UContainer>
    <USkeleton />
  </UContainer>
</template>