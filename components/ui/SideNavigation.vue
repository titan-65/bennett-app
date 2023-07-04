<template>
  <aside class="hidden py-8 overflow-y-auto lg:block lg:self-start lg:top-16 lg:max-h-[calc(100vh-65px)] lg:sticky lg:pr-8 lg:pl-[2px] lg:col-span-2">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200 dark:border-gray-800"></div>
          </div>
          <div class="relative flex items-center justify-center">
            <span class="px-3 bg-white dark:bg-gray-900 text-sm font-medium text-gray-900 dark:text-white">
              Navigation
            </span>

          </div>


        </div>
        <!--         Getting Started-->
        <div class="mt-8">
          <h3 class="px-3 mb-3 text-xs font-semibold tracking-wide text-gray-900 uppercase dark:text-gray-50">
            Getting Started
          </h3>
          <div class="space-y-1">
            <NuxtLink
              to="/docs/getting-started/introduction"
              class="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md dark:text-gray-50"
            >
              <span class="truncate">Introduction</span>
            </NuxtLink>
            <NuxtLink
              to="/docs/getting-started/quick-start"
              class="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md dark:text-gray-50"
            >
              <span class="truncate">Blogs</span>
            </NuxtLink>
            <NuxtLink
              to="/docs/getting-started/installation"
              class="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md dark:text-gray-50"
            >
              <span class="truncate">Projects</span>
            </NuxtLink>
          </div>
        </div>
        <!--         Components-->
        <div class="mt-8">
          <h3 class="px-3 mb-3 text-xs font-semibold tracking-wide text-gray-900 uppercase dark:text-gray-50">
            Talks/Workshops/Streams
          </h3>
          <div class="space-y-1">
            <NuxtLink
              to="/docs/components/alerts"
              class="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md dark:text-gray-50"
            >
              <span class="truncate">Twitch</span>
            </NuxtLink>
            <NuxtLink
              to="/docs/components/buttons"
              class="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md dark:text-gray-50"
            >
              <span class="truncate">Streams</span>
            </NuxtLink>
            <NuxtLink
              to="/docs/components/cards"
              class="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md dark:text-gray-50"
            >
              <span class="truncate">Podcasts</span>
            </NuxtLink>
          </div>
        </div>
    <!-- Demonstration -->
        <div class="mt-8">
          <h3 class="px-3 mb-3 text-xs font-semibold tracking-wide text-gray-900 uppercase dark:text-gray-50">
            Demonstration
          </h3>
          <div class="space-y-1">
            <NuxtLink
              to="/docs/demonstration/overview"
              class="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md dark:text-gray-50"
            >
              <span class="truncate">Demos</span>
            </NuxtLink>
          </div>
        </div>
      </aside>
</template>