<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div>
    <div
      class="relative pl-1 mr-8 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer"
    >
      <div
        class="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block"
      >
        {{ item.tag }}
      </div>
      <div
        class="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500"
      ></div>
      <div
        class="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600"
      ></div>
      <div class="w-52 pb-2 bg-white rounded-xl shadow-xl z-10">
        <div class="relative">
          <!-- :src="image.largeImageURL"     -->
          <img
            :src="item.img"
            class="max-h-60 object-cover rounded-t-xl"
            :alt="item.title"
          />
          <!-- Tag rekomendasi -->
          <div
            class="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium"
          >
            {{ item.language }}
          </div>
        </div>
        <div class="px-2 py-1">
          <!-- Product Title -->
          <div class="text-sm md:text-base font-bold pr-2">
            {{ item.title }}
          </div>
          <div class="flex py-2">
            <!-- Distance -->
            <div
              class="bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900"
            >
              {{ item.readTime }} mins
            </div>
            <div class="flex justify-between item-center">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 md:h-5 md:w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <!-- Rating total -->
                <p class="text-gray-600 font-bold text-xs md:text-sm ml-1">
                  {{ item.rating }}
                  <!-- Jumlah review -->
                  <span class="text-gray-500 font-normal">(0 ratings)</span>
                </p>
              </div>
            </div>
          </div>
          <!-- Alamat -->
          <p class="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">
            {{ item.description }}
          </p>
          <!-- Tombol pesan -->
          <NuxtLink
            class="inset-x-0 bottom-0 flex justify-center bg-blue-500 hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-16 p-1 text-gray-100 hover:text-blue-900"
            :to="{ name: 'blog-slug', params: { slug: item.slug } }"
            >Read</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>