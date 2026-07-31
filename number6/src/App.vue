<script setup lang="ts">
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>

  <div v-if="message">
    <h4>{{ message }}</h4>
  </div>

  <RouterView />

</template>