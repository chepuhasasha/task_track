import type { App } from "vue";
import Status from "./Status.vue";

export default {
  install(vue: App) {
    vue.component("StatusWidget", Status);
  },
};
