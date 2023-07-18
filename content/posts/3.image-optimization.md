---
title: Image Optimization
description: In this tutorial we will be exploring how to optimize images to improve the performance of your website.
keywords: [developer, Jamaican, Nuxt3, Nuxt, Image Optimization, Typescript, Vue, Javascript]
tag: [nuxt3, vue, javascript]
date: 2023-07-13
rating: 10
readTime: 10
image: 
src: https://github.com/nuxt/image/blob/main/docs/public/icon.png?raw=true
alt: Image Optimization
head:
meta:
- name: ‘keywords’
- name: ‘author’
name: Vantol Bennett
website: www.teammps.com
imgAuthor: https://res.cloudinary.com/ddszyeplg/image/upload/v1636919468/DSC_0988_zsfhgy.jpg
---

# Image Optimization

 In modern web development, images are a core part of the user experience. Images are used to convey information, to make the website more visually appealing, and to make the website more engaging. However, images can also be a source of performance issues. Images can be large and can take a long time to load. This can lead to a poor user experience (UX). In this tutorial we will be exploring how to optimize images to improve the performance of your website.
 
## What is Image Optimization?

Image optimization is the process of reducing the file size of an image without sacrificing quality. This is done by removing unnecessary data from the image. This can be done by reducing the dimensions of the image, reducing the number of colors in the image, or by using a more efficient image format. Optimizing images can improve load times of your website and reduce usage on servers. This will lead to a better UX and improved SEO.

## Using the Nuxt Image Module

In order to achieve image optimization in Nuxt 3, we the official Nuxt Module - [Nuxt Image](https://v1.image.nuxtjs.org/). This module allows you to easily optimize images in your Nuxt 3 application. Providing a plug and play solution for image optimization.

### Installing the Module

To install the module, run the following command:

```bash
pnpm add -D @nuxt/image@rc

npm install -D @nuxt/image@rc

```
### Configuring the Module

To configure the module, add the following code to your `nuxt.config.js` file:

```ts
image: {
    quality: 80,
    formats: ['avif', 'webp']
}
```

### `<nuxt-img>` Component

The `<nuxt-img>` component is the main component of the Nuxt Image module. It is used to display images in your application. It is used like this:

```vue
<nuxt-img src="/cookie_recipe.jpg" />
```

This will display the image at the original size. However, you can also specify the width and height of the image:

```vue
<nuxt-img src="/cookie_recipe.jpg" width="500" height="500" />
```

This will display the image at a width of 500px and a height of 500px. You can also specify the original image size using `sizes` props:

```vue
<nuxt-img src="/cookie_recipe.jpg" sizes="(max-width: 600px) 100vw, 600px" />
```

We can also specify `fit` props that specify how the image should be resized:

```vue
<nuxt-img src="/cookie_recipe.jpg" fit="cover" />

<nuxt-img src="/cookie_recipe.jpg" fit="contain" />

<nuxt-img src="/cookie_recipe.jpg" fit="fill" />

<nuxt-img src="/cookie_recipe.jpg" fit="inside" />

<nuxt-img src="/cookie_recipe.jpg" fit="outside" />

```

### `<nuxt-picture>` Component

The `<nuxt-picture>` component is used to display images in your application. It is used like this:

```vue
<nuxt-picture format="avif,webp" src="/nuxt-icon.png" ... />
```

## Conclusion

In this tutorial we explored image optimization. We learned what image optimization is and how to use the Nuxt Image module to optimize images in your Nuxt 3 application. We also learned how to use the `<nuxt-img>` and `<nuxt-picture>` components to display images in your application. We hope you found this tutorial helpful. If you have any questions or comments, please leave them in the comments section below. Thank you for reading!
