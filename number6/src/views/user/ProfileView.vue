<script setup lang="ts">
import { type User } from '@/types'

defineProps<{
  user: User
}>()
</script>


<template>
  <div>
    <h2>Profile</h2>

    <p>
      Address:
      {{ user.address.street }},
      {{ user.address.city }}
    </p>

    <p>
      Phone:
      {{ user.phone }}
    </p>
  </div>
</template>