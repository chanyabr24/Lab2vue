@@ -0,0 +1,16 @@
<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useMessageStore } from '@/stores/message';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useMessageStore()
const props = defineProps<{
    event: Event
}>()
// eslint-disable-next-line @typescript-eslint/no-unsend-vars
const { event } = toRefs(props)
const updateEvent = () => {
  store.updateMessage('The data has been updated.')

  setTimeout(() => {
    store.resetMessage()
  }, 3000)

  router.push({
    name: 'event-detail-view',
    params: {
      id: props.event.id
    }
  })
}
</script>
    <template>
            <p>Edit event here</p>
            <button @click="updateEvent">Upadte</button>
    </template>
