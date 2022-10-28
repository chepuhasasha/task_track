<template lang="pug">
p(:class='[size]')
  slot
</template>
<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  size: { type: String as PropType<"s" | "m" | "l">, default: "m" },
});
</script>
<style lang="sass" scoped>
.s
  font: var(--font-300)
  color: var(--text-color-300)
.m
  font: var(--font-200)
  color: var(--text-color-200)
.l
  font: var(--font-100)
  color: var(--text-color-200)
</style>
