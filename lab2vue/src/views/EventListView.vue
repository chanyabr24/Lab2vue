<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/types'
import { ref, onMounted , computed, watchEffect} from 'vue'
import EventCategory from '@/components/EventCategory.vue'
import EventService from '@/services/EventService'


const events = ref<Event[] | null>(null)

const totalEvents = ref(0)

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  }
})
const size = computed(() => props.size)

const page = computed( () => props.page)
const hasNextPage = computed( () => {
  const totalPage = Math.ceil(totalEvents.value / 3)
  return page.value < totalPage
})

onMounted( () => {
watchEffect( () => {
EventService.getEvents(3, page.value)
  .then ((response) => {
    events.value = response.data
    totalEvents.value = response.headers['x-total-count']
  })
  .catch((error) => {
    console.error('There was an error!', error)
  })
  
})
})
</script>

<template>
   <h1>Events For Good</h1>
  <div class="flex flex-col items-center">
    <div v-for="event in events" :key="event.id" >
    <EventCard :event="event" />
    <EventCategory :event="event" />
    </div>
  <div class="flex w-[290px]">
  <RouterLink
   class="flex-1 no-underline text-gray-700 text-left"
    :to="{ name: 'event-list-view', query: { page: page - 1, size: size } }"
    rel="prev"
    v-if="page != 1"
  >&#60;
    Prev Page
  </RouterLink>
      <RouterLink class="flex-1 no-underline text-gray-700 text-right"
       :to="{ name: 'event-list-view', query: { page: page + 1}}" rel="next" v-if="hasNextPage"
      >
        Next Page &#62;</RouterLink>

  </div>
  </div>
</template>

<style scoped>
</style>
