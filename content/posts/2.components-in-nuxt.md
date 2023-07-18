---
title: Nuxt 3 Components
description: In this tutorial we will be exploring a core concept of Nuxt 3, Components. Components are the building blocks of your application.
keywords: [developer, Jamaican, Nuxt3, Nuxt, Components, Typescript, Vue, Javascript]
tag: [nuxt3, vue, javascript]
date: 2023-07-13
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

# Nuxt 3 Components

In this tutorial we will be exploring a core concept of Nuxt 3, Components. We will explore how to create components and how to use them in our application.

## Creating Components and Using Them

Components are the building blocks of any Vue application and with Nuxt 3 there is no difference except that components are created in the `components/` directory. This allows for the components to be globally available in your application through Nuxt 3 amazing auto import feature. 🔥

To create a component, create a file in the `components/` directory. For example, if you create a file called `components/HelloWorld.vue` it will be globally available in your application. You can then use it in any other component by importing it and using it in the `components` property.

```vue
<template>
  <div>
    <HelloWorld />
  </div>
</template>
```

## Understanding the Naming Convention

If you are like me you a folder structure is integral when creating a project. Let's take a look at the following nested folder structure:

```
.nuxt-app/
└── components/
    └── recipe/
        └── card/
            └── Image.vue
```

Based on this folder structure, the component name will be based on the path of the directory and the filename. In this case the component name will be `<RecipeCardImage />`. This is because the path to the component is `recipe/card/Image.vue`. This is a great feature because it allows you to create components with the same name in different directories without having to worry about naming conflicts.

__ Note:__ If you want to use the auto-import based on the name and not the path you can change this in the `nuxt.config.ts` file.

## `<ClientOnly />` Component

In most cases you will want to render your components on the client side only. This is because some components may not be compatible with SSR. To do this you can use the `<ClientOnly />` component. This component will only render on the client side and will not be rendered on the server side. This component personally, I hardly use it (😦) even though it makes sense to use it.

To import a component in client only mode you can register it in a client-side plugin.

```vue
// pages/recipe/_id.vue
<template>
  <div>
    <ClientOnly>
      <RecipeCardImage />
    </ClientOnly>
  </div>
</template>
```

Nuxt also offers another way to achieve client-only rendering by adding a suffix `.client` to the component name. For example, if you have a component called `RecipeCardImage.client.vue` it will only be rendered on the client side.

__Note:__ There is also a `.server` components and this feature is currently experimental. We will explore this in a future tutorial.

## Conclusion

In this tutorial we explored how to create components and how to use them in our application. We also explored the `<ClientOnly />` component and how to use it in our application. In the next tutorial we will explore how to use the `<ClientOnly />` component to render components on the client side only.

