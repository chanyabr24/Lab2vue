<script setup lang="ts">
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService'

const students = ref<any[]>([])

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>

<template>
  <div>
    <h1>Students</h1>

    <div
      v-for="student in students"
      :key="student.id"
    >
      <div class="border border-[#39495c] p-[20px] m-[10px]">
        <h2>
          {{ student.name }} {{ student.surname }}
        </h2>
        <p>GPA: {{ student.gpa }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>