<template lang="pug">
component(:is="tag")
  slot
</template>
<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  tag: { type: String as PropType<"h1" | "h2" | "h3">, default: "h1" },
});
</script>
<style lang="sass" scoped>
h1
  color: var(--text-color-100)
  font: var(--font-h1)
h2
  color: var(--text-color-100)
  font: var(--font-h2)
h3
  color: var(--text-color-100)
  font: var(--font-h3)
</style>
