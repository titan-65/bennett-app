<script setup lang="ts">
const slug = useRoute().params.slug.toString().replace(/,/g, "/");
console.log(slug);

const { data: project } = await useAsyncData(slug, () => {
  return queryContent(slug).findOne();
});

const toc = computed(() => {
  if (!project.value) return [];
  const items = project.value.excerpt?.children;
  if (!items) return [];
  const toc: any[] = [];
  const tags = ["h2", "h3", "h4", "h5", "h6"];
  items.forEach((item: { tag: string; props: { id: { toString: () => string; }; }; }) => {
    if (tags.includes(item.tag)) {
      toc.push({
        id: item.props.id,
        title: item.props.id.toString().replace(/-/g, " "),
        depth: Number(item.tag.replace(/h/g, "")),
      });
    }
  });
  return toc;
});

const { next, prev } = useContent();
// console.log(next)
// console.log(prev)
useHead({
  title: `${project.value.title}`,
});
</script>
<template>
  <main>
    <article
      class="lg:pt-20 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[10%]"
    >
      <div
        v-if="project.excerpt"
        class="w-[300px] p-5 sticky top-3 border rounded-md bg-white hidden lg:block"
      >
        <h2 class="text-sm font-bold mb-4">Table Of Contents</h2>
        <ul class="space-y-2">
          <template v-for="(t, k) in toc" :key="`toc-item-${k}`">
            <li>
              <NuxtLink
                :class="{
                  'text-sm ml-4': t.depth == 2,
                  'text-[13px] ml-6': t.depth > 2,
                }"
                class="capitalize"
                :to="`#${t.id}`"
                >{{ t.title }}</NuxtLink
              >
            </li>
          </template>
        </ul>
      </div>
      <ClientOnly>
        <ContentRenderer
          class="prose lg:prose-base prose-sm prose-slate post-link pr-7 max-w-none"
          :value="project"
        >
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </ClientOnly>
    </article>
    <NuxtLink v-if="prev" :to="prev._path">{{ prev.title }}</NuxtLink>
    <NuxtLink v-if="next" :to="next._path">{{ next.title }}</NuxtLink>
  </main>
</template>