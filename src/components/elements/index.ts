import type { App } from "vue";
import H from "./H.vue";
import P from "./P.vue";

export default {
  install(vue: App) {
    vue.component("HTag", H);
    vue.component("PTag", P);
  },
};
