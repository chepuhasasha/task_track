<template lang="pug">
.status
  | {{ status }}
  | #[.status_type(:class='[`status_type__${status}`]')]
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type { ITask } from "@/dto/task.interface";

const props = defineProps({
  status: { type: String as PropType<ITask['status']> },
});

</script>
<style lang="sass">
.status
  display: flex
  gap: 6px
  align-items: center
  font: var(--font-200)
  line-height: 12px
  padding: 4px
  border-radius: 4px
  text-transform: uppercase
  background: var(--contrast-100)
  color: var(--text-color-100)
  border: var(--border-100)
  &_type
    width: 6px
    height: 6px
    border-radius: 3px
    &__todo
      background: red
    &__inwork
      background: yellow
    &__ready
      background: lightgreen
</style>
