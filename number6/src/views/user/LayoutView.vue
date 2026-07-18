<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
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
})
</script>

<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>

    <nav>
      <RouterLink :to="{ name:'user-profile', params:{id:user.id} }">
        Profile
      </RouterLink>

      |
      
      <RouterLink :to="{ name:'user-posts', params:{id:user.id} }">
        Posts
      </RouterLink>
    </nav>

    <RouterView :user="user"/>
  </div>
</template>