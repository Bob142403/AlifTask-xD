<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" @click="router.push('/')">Quotes</a>
      <button
        class="btn btn-outline-success"
        type="submit"
        @click="router.push('/create')"
      >
        Добавить
      </button>
    </div>
  </nav>
</template>
<style scoped></style>
