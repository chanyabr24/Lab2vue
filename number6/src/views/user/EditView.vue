<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const updateUser = () => {
  router.push({
    name: 'user-profile',
    params: {
      id: route.params.id
    }
  })
}
</script>

<template>
  <h2>Edit User</h2>

  <button @click="updateUser">
    Update
  </button>
</template>