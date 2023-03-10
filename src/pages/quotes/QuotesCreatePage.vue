<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'

  const store = useStore()
  const router = useRouter()

  store.commit('setAuthotInput', '')
  store.commit('setQuoteInput', '')

  const text = ref('')
  const author = ref('')
  const genres = ref([])
  const genre = ref('')

  function checkText(str) {
    const arr = str.split('')
    let check = str.length !== 0

    arr.forEach((index) => {
      const char = str.charCodeAt(index)
      if (
        (char >= 1024 && char <= 1279) ||
        char === 32 ||
        (char >= 65 && char <= 90) ||
        (char >= 97 && char <= 122)
      ) {
      } else {
        check = false
      }
    })
    return check
  }

  function createQuote() {
    text.value = text.value.trim()
    author.value = author.value.trim()

    if (text.value && checkText(author.value)) {
      genres.value = genres.value.map((genre) => genre.text)
      store.commit('addQuote', {
        text: text.value,
        author: author.value,
        genres: genres.value.join(', '),
        datecreate: new Date().toString(),
        dateupdate: new Date().toString(),
      })
      router.push('/')
    }
  }

  function addGenre() {
    if (checkText(genre.value)) {
      genres.value.push({ text: genre.value, id: new Date().toString() })
      genre.value = ''
    }
  }
</script>

<template>
  <div class="form-floating mb-3 mt-3">
    <input
      type="text"
      class="form-control"
      id="floatingInput"
      placeholder="Цытата"
      v-model="text"
      pattern="^.+"
      title="Не Должен быть пустым"
    />
    <label for="floatingInput">Цытата</label>
  </div>
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      id="floatingInput1"
      placeholder="Автор"
      v-model="author"
      pattern="^[A-Za-zА-Яа-яЁё\s]+"
      title="Не Должен быть пустым и Только Латиские, Кирилица"
    />
    <label for="floatingInput1">Автор</label>
  </div>

  <div class="form-group d-flex align-items-center mt-3">
    <input
      type="text"
      class="form-control"
      id="formGroupExampleInput3"
      placeholder="Жанр"
      v-model="genre"
      pattern="^[A-Za-zА-Яа-яЁё\s]*"
      title="Не Должен быть пустым и Только Латиские, Кирилица"
    />
    <button class="btn btn-outline-secondary ms-3" @click="addGenre">
      Добавить
    </button>
  </div>

  <div class="form-group mt-3">
    Жанр:
    <template v-if="!genres.length">Нету</template>
    <span
      class="badge text-bg-info me-2"
      v-for="genre in genres"
      :key="genre.id"
    >
      {{ genre.text }}
    </span>
  </div>

  <button class="btn btn-primary mt-3" @click="createQuote">
    Добавить Цытату
  </button>
</template>

<style scoped></style>
