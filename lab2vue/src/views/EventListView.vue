<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import type { Event } from '@/types'
import { ref, onMounted } from 'vue'
import EventCategory from '@/components/EventCategory.vue';
import axios from 'axios'

const events = ref<Event[] | null>(null)

onMounted( () => {
  axios 
  .get('https://my-json-server.typicode.com/chanyabr24/Lab2new/events')
  .then ((response) => {
    events.value = response.data
  })
  .catch((error) => {
    console.error('There was an error!', error)
  })
})
</script>

<template>
    <h1>Events For Good</h1>
  <div class="events">
    <div v-for="event in events" :key="event.id" >
    <EventCard :event="event" />
    <EventCategory :event="event" />
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
