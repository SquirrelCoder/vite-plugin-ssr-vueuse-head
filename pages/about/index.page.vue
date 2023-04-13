<template>
  <h1>About</h1>
  <p>Example of app using <code>vite-plugin-ssr</code>.</p>
</template>

<script setup>
import { useSeoMeta } from "@vueuse/head";

useSeoMeta({
  title: 'About',
  description: 'My about page',
  ogDescription: 'This is the about page!',
  ogTitle: 'About',
});

</script>

<style>
code {
  font-family: monospace;
  background-color: #eaeaea;
  padding: 3px 5px;
  border-radius: 4px;
}
</style>
