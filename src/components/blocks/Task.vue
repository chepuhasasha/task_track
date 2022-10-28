<template lang="pug">
.task
  HTag(tag='h3') {{ task.title }}
  PTag {{ task.description }}
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type { ITask } from "@/dto/task.interface";

defineProps({
  task: { type: Object as PropType<ITask> },
});
</script>
<style lang="sass">
.task
  display: flex
  flex-direction: column
  gap: 10px
  background: var(--contrast-200)
  border-radius: 10px
  padding: 10px
  cursor: pointer
</style>
