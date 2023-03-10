import { createStore } from "vuex";
import quotes from "./modules/quotes";

export const store = createStore({
  modules: { quotes },
});
