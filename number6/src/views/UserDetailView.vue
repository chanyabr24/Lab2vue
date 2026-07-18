<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserService from '@/services/UserService'

const user = ref<any>(null)

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  UserService.getUser(Number(props.id))
    .then((response) => {
      user.value = response.data
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>

<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>

    <p><b>Email:</b> {{ user.email }}</p>

    <p><b>Phone:</b> {{ user.phone }}</p>

    <p><b>Website:</b> {{ user.website }}</p>

    <p><b>Company:</b> {{ user.company.name }}</p>
  </div>
</template>