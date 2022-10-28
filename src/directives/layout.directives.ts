import type { App } from "vue";

export default {
  install(vue: App) {
    vue.directive("area", (el: HTMLElement, binding) => {
      el.style.gridArea = binding.value;
    });
  },
};
