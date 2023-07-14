<script setup lang="ts">
</script>
<template>
  <div>
    <UiMainHeader />
    <div class="mx-auto px-4 mb-12 sm:px-6 lg:px-8 max-w-7xl grid lg:grid-cols-10 lg:gap-8">
      <UiSideNavigation />
      <div class="lg:col-span-8 flex-auto mt-8 min-h-0 flex flex-col">
        <slot />
      </div>


    </div>

  </div>
</template>
