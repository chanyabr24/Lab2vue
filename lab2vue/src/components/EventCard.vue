<script setup lang="ts">
// defineProps<{
//  msg: string
// }>()
/*
const event = ref({
    id: 5928101,
    category: 'animal welfare',
    title: 'Cat Adoption Day',
    description: 'Find your new feline friend at this event.',
    location: 'Meow Town',
    date: 'January 28, 2026',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Laydee'
})
*/
import type { Event } from '@/types'
defineProps<{
    event: Event
}>()
</script>

<template>
 <RouterLink class="no-underline text-gray-700" :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
        <h2>{{ event.title }}</h2>
        <span>@ {{ event.time }} on {{ event.date }}</span>
    </div>
 </RouterLink>
</template>

<style scoped>
</style>

