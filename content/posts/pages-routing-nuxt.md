---
title: Nuxt 3 Pages Routing
description: In this tutorial we will be exploring a core concept of Nuxt 3, Pages and Routing. Pages are the building blocks of your application. They are the components that are rendered when a user navigates to a specific route. Pages are also the components that are statically generated when you build your application. Routing determines how the users navigate through your application. In this tutorial we will be exploring how to create pages and how to navigate between them.
keywords: [developer, Jamaican, Nuxt3, Nuxt, Pages, Routing, Vue, Javascript, Frontend, Frontend Development]
tag: [nuxt, nuxt3, pages, routing, vue, javascript, frontend, frontend development, frontend developer, frontend engineer, frontend web developer ]
date: 2023-07-12
rating: 10
readTime: 10
image: 
src: https://res.cloudinary.com/ddszyeplg/image/upload/v1642350413/vantol/black-text_emxagi.png
alt: Nuxt 3 Pages Routing
head:
meta:
- name: ‘keywords’
- name: ‘author’
name: Vantol Bennett
website: www.teammps.com
imgAuthor: https://res.cloudinary.com/ddszyeplg/image/upload/v1636919468/DSC_0988_zsfhgy.jpg
---


# Nuxt 3 Pages Routing

In this tutorial we will be exploring a core concept of Nuxt 3, Pages and Routing. In this tutorial we will be exploring how to create pages and how to navigate between them.

## Creating Pages

In Nuxt each file in the `pages/` directory is a route. For example, if you create a file called `pages/about.vue` it will be accessible at `/about`.

.nuxt-app/

└── pages/

    ├── index.vue
    ├── about.vue
    └── blog/
        └── index.vue


In the `about.vue` file we can add the following code:

```vue
<script setup lang="ts">

</script>
<template>
  <h1>About</h1>
  <p>This is the about page</p>
</template>
```

Using the `script setup` syntax we can use the composition API which is what Nuxt 3 is built on. We can also use TypeScript by adding `lang="ts"` to the `script` tag.

With this code, component will be rendered when a user navigates to `/about`.

## Understanding Routing using File System Routing

In Nuxt 3, routing is done using the file system. Each file in the `pages/` directory is a route. For example, if you create a file called `pages/about.vue` it will be accessible at `/about`. You can also create nested routes by creating a folder with the same name as the file. For example, if you create a file called `pages/blog/index.vue` it will be accessible at `/blog`.


## Dynamic Routes

Nuxt allows us to add dynamic routes by adding a `[]` in the file name. For example, a file named `pages/posts/[id].vue` will be accessible at `/posts/:id`. The `id` parameter will be available in the component as `$route.params.id`. In this file, you can access route using Composition API, we can utilize the `useRoute` hook.

```vue
<script setup lang="ts">
const route = useRoute()
const id = route.params.id
</script>
<template>
  <h1>Post {{ id }}</h1>
</template>
```

## Nested Routes and Catch All Routes

Nuxt allows us to create nested routes by creating a folder with the same name as the file. For example, if you create a file called `pages/blog/index.vue` it will be accessible at `/blog`. You can also create nested routes by creating a folder with the same name as the file. For example, if you create a file called `pages/blog/index.vue` it will be accessible at `/blog`.

.nuxt-app/

└── pages/

    ├── index.vue
    ├── about.vue
    └── blog/
        └── index.vue

Nuxt also allows us to create catch all routes by adding `[]` to the file name. For example, a file named `pages/posts/[...slug].vue` will be accessible at `/posts/:slug*`. The `slug` parameter will be available in the component as `$route.params.slug`. In this file, you can access route using Composition API, we can utilize the `useRoute` hook.

```vue
<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug
</script>
<template>
  <h1>Post {{ slug }}</h1>
</template>
```

## Navigation

Nuxt provides a `<NuxtLink>` component that allows you to navigate between pages. The `<NuxtLink>` component is similar to the `<router-link>` component in Vue Router. The `<NuxtLink>` component will automatically be rendered as an `<a>` tag if the target is an external link.

```vue
<template>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/blog">Blog</NuxtLink>
</template>
```

## Conclusion

In this tutorial we explored how to create pages and how to navigate between them. We also explored how to create dynamic routes, nested routes and catch all routes. In the next tutorial we will be exploring how to create layouts and how to use them in our pages.