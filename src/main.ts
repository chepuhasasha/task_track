import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./styles/main.sass";

import Elements from "./components/elements";
import LayoutDirectives from "./directives/layout.directives";

createApp(App)
  .use(createPinia())
  .use(router)
  .use(LayoutDirectives)
  .use(Elements)
  .mount("#app");
