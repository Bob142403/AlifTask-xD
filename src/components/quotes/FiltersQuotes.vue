<script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  const author = ref(store.state.quotes.authorInput)
  const quote = ref(store.state.quotes.quoteInput)

  function filterQuote() {
    store.commit('setAuthotInput', author.value)
    store.commit('setQuoteInput', quote.value)
  }
</script>

<template>
  <div class="form-group d-flex my-3">
    <input
      type="text"
      class="form-control mx-2"
      id="formGroupExampleInput3"
      placeholder="Автор"
      v-model="author"
    />
    <input
      type="text"
      class="form-control mx-2"
      id="formGroupExampleInput3"
      placeholder="Цытата"
      v-model="quote"
    />
    <button class="btn btn-outline-success mx-2" @click="filterQuote">
      Поиск
    </button>
  </div>
</template>
<style scoped></style>
