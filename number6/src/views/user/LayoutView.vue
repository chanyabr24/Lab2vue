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