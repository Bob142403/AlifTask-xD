<script setup>
  import { computed, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from 'vuex'

  const route = useRoute()
  const router = useRouter()
  const store = useStore()

  const text = ref(store.getters.getQuoteById(route.params.quoteId).text)

  const quoteInfo = computed(() =>
    store.getters.getQuoteById(route.params.quoteId)
  )

  function delQuote() {
    const idDel = confirm('Вы точно хотите удалить ?')
    if (idDel) {
      store.commit('delQuoteById', route.params.quoteId)
      router.push('/')
    }
  }

  function updateQuote() {
    if (text.value.trim()) {
      store.commit('updateQuoteById', { id: route.params.quoteId, text })
      router.push('/')
    }
  }
</script>

<template>
  <div class="form-floating mb-3 mt-3">
    <input
      type="text"
      class="form-control"
      id="floatingInput"
      placeholder="name@example.com"
      v-model="text"
    />
    <label for="floatingInput">Цытата</label>
  </div>
  <p>Автор: {{ quoteInfo.author }}</p>
  <p>Жанр: {{ quoteInfo.genres || 'Нету' }}</p>
  <p>Время Создания: {{ quoteInfo.datecreate }}</p>
  <p>Последнее Изменение: {{ quoteInfo.dateupdate }}</p>
  <div>
    <button class="btn btn-primary me-3" @click="updateQuote">Сохранить</button>
    <button class="btn btn-danger" @click="delQuote">Удалить</button>
  </div>
</template>
<style scoped></style>
