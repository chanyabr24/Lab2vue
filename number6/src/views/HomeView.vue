<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { User } from '@/types'
import UserService from '@/services/UserService'

const users = ref<User[]>([])

onMounted(() => {
  UserService.getUsers()
    .then((response) => {
      users.value = response.data
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>

<template>
  <h1>Users</h1>

  <div class="users">
    <div class="user-card" v-for="user in users" :key="user.id">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <p>{{ user.company.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-card {
  width: 320px;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>