<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref<any[]>([])

const props = defineProps({
  id:{
    type:String,
    required:true
  }
})

onMounted(()=>{
  axios
    .get(
      'https://jsonplaceholder.typicode.com/posts?userId=' 
      + props.id
    )
    .then((response)=>{
      posts.value = response.data
    })
})
</script>


<template>
  <div>
    <h2>Posts</h2>

    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>

  </div>
</template>