<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>Oops!</h1>
    <h3>The page you're looking for is not here.</h3>

    <RouterLink :to="{ name: 'home' }">
      Back to the home page
    </RouterLink>
  </div>
</template>