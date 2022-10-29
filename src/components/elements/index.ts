import type { App } from "vue";
import H from "./H.vue";
import P from "./P.vue";
import Input from "./Input.vue";

export default {
  install(vue: App) {
    vue.component("HTag", H);
    vue.component("PTag", P);
    vue.component("InputTag", Input);
  },
};
