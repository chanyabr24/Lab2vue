<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/types'
import { ref, onMounted , computed} from 'vue'
import EventCategory from '@/components/EventCategory.vue'
import EventService from '@/services/EventService'

const events = ref<Event[] | null>(null)

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const page = computed( () => props.page)
onMounted( () => {
EventService.getEvents(2, page.value)
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
