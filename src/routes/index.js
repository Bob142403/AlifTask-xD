import QuotesCreatePage from "../pages/quotes/QuotesCreatePage.vue";
import QuotesIndexPage from "../pages/quotes/QuotesIndexPage.vue";
import QuotesUpdatePage from "../pages/quotes/QuotesUpdatePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: QuotesIndexPage,
  },
  {
    path: "/create",
    component: QuotesCreatePage,
  },
  {
    path: "/update/:quoteId",
    component: QuotesUpdatePage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
