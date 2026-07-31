<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView, RouterLink, useRouter } from 'vue-router'
import UserService from '@/services/UserService'

const user = ref<any>(null)

const router = useRouter()

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  UserService.getUser(Number(props.id))
    .then((response) => {
      if (!response.data || Object.keys(response.data).length === 0) {
        router.push({
          name: '404-resource-view',
          params: {
            resource: 'user'
          }
        })
        return
      }

      user.value = response.data
    })
    .catch((error) => {
      console.error(error)

      router.push({
        name: '404-resource-view',
        params: {
          resource: 'user'
        }
      })
    })
})
</script>
<template>
  <div v-if="user">
    <h1>User: {{ user.name }}</h1>

    <nav>
      <RouterLink :to="{ name: 'user-profile', params: { id: user.id } }">
        Profile
      </RouterLink>

      <RouterLink :to="{ name: 'user-posts', params: { id: user.id } }">
        Posts
      </RouterLink>

      <RouterLink :to="{ name: 'user-edit-view', params: { id: user.id } }">
        Edit
      </RouterLink>
    </nav>

    <RouterView :user="user"/>
  </div>
</template>