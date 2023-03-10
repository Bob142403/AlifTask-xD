import { isIntegerKey } from '@vue/shared'

export default {
  state: {
    quotes: [],
    index: 1,
    authorInput: '',
    quoteInput: '',
  },
  mutations: {
    addQuote(state, quote) {
      state.quotes.push({ ...quote, id: state.index++ })
    },
    delQuoteById(state, id) {
      state.quotes = state.quotes.filter((quote) => quote.id !== +id)
    },
    updateQuoteById(state, payload) {
      state.quotes = state.quotes.map((quote) => {
        if (quote.id === +payload.id) {
          return {
            ...quote,
            text: payload.text,
            dateupdate: new Date().toString(),
          }
        } else {
          return { ...quote }
        }
      })
    },
    setAuthotInput(state, author) {
      state.authorInput = author
    },
    setQuoteInput(state, quote) {
      state.quoteInput = quote
    },
  },
  getters: {
    getQuoteById: (state) => (quoteId) => {
      return (
        state.quotes.find((quote) => quote.id === +quoteId) || {
          author: '',
          text: '',
        }
      )
    },
    getFilteredQuote: (state) => {
      return state.quotes.filter(
        (quote) =>
          quote.author.includes(state.authorInput) &&
          quote.text.includes(state.quoteInput)
      )
    },
  },
}

/** 
Dim x, y As Double
for 
*/
