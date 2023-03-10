<script setup>
  import { useRouter } from 'vue-router'

  const props = defineProps({
    text: String,
    author: String,
    genres: String,
    id: Number,
  })

  const router = useRouter()

  const URL = `/update/${props.id}`
</script>

<template>
  <div class="card m-2" @click="router.push(URL)">
    <div class="card-body">
      <h5 class="card-title">{{ author }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        <p>Жанр: {{ genres || 'Нету' }}</p>
      </h6>
      <p class="card-text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style scoped>
  .card {
    cursor: pointer;
  }
</style>
