<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
  </ul>
</template>

<script lang="ts" setup>
import { useSeoMeta } from "@vueuse/head";

useSeoMeta({
  title: 'Index',
  description: 'My Index Page',
  ogDescription: 'This is the index page!',
  ogTitle: 'Index',
});


</script>
