<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  import QuoteCard from '../../components/quotes/QuoteCard.vue'
  import FiltersQuotes from '../../components/quotes/FiltersQuotes.vue'

  const store = useStore()

  const quotes = computed(() => store.getters.getFilteredQuote)
</script>

<template>
  <div class="quotes-page d-flex flex-column">
    <FiltersQuotes />
    <template v-for="quote in quotes" :key="quote.id">
      <QuoteCard
        :text="quote.text"
        :author="quote.author"
        :genres="quote.genres"
        :id="quote.id"
      ></QuoteCard>
    </template>
  </div>
</template>

<style scoped></style>
