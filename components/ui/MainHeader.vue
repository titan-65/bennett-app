<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
const items = [
  [{
    label: 'Blog',
    icon: 'i-heroicons-bookmark-square',
    onClick: () => navigateTo({
      path: '/posts'
    })
  }],
  // [{
  //   label: 'Settings',
  //   icon: 'i-heroicons-cog-20-solid',
  //   onClick: () => console.log('Settings clicked')
  // }],
  // [{
  //   label: 'Logout',
  //   icon: 'i-heroicons-logout-20-solid',
  //   onClick: () => console.log('Logout clicked')
  // }]
]
</script>
<template>
  <header
    class="sticky top-0 z-50 w-full backdrop-blur flex-none border-b border-gray-900/10 dark:border-gray-50/[0.06] bg-white/75 dark:bg-black"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-3">
            <NuxtLink
            to="/"
            class="router-link-active router-link-exact-active flex items-end gap-1.5 font-bold text-xl text-gray-900 dark:text-white"
            aria-current="page"
          ><span class="text-primary-700 dark:text-primary-400"
              >V</span
            >Bennett</NuxtLink
          >
          </div>
        </div>
        <div class="flex items-center justify-end flex-1 -mr-1.5 gap-1.5">
           <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
<!--           <div class="gap-x-5">-->
<!--            <UBadge color="gray" label="Teacher Portal" />-->
<!--          </div>-->

<!--          <button class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center">-->
<!--            <NuxtLink to="/account/login">Signin</NuxtLink>-->
<!--          </button>-->
          <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" label="Menu" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown>

          <div class="gap-x-1.5">


          </div>
        </div>
      </div>
    </div>
  </header>
</template>
