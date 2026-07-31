<script setup lang="ts">
import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router'

const store = useMessageStore()
const router = useRouter()

 const updateUser = () => {
  console.log('Update clicked')

  store.updateMessage('Update is in progress')

  setTimeout(() => {
    store.resetMessage()

    router.push({
      name: 'home'
    })
  }, 5000)
}
</script>

<template>
  <h2>Edit User</h2>

  <button @click="updateUser">
    Update
  </button>
</template>