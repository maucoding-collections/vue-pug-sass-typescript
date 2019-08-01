import Vue from "vue";
import Parent from "./components/Parent.vue";

// initial app
export const app = new Vue({
  render: create => create(Parent)
});

app.$mount("#app");
