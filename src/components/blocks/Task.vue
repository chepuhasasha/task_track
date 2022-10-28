<template lang="pug">
.task(@dragstart="dragStart($event, task)", draggable="true")
  HTag(tag="h3") {{ task.title }}
  PTag {{ task.description }}
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type { ITask } from "@/dto/task.interface";

const props = defineProps({
  task: { type: Object as PropType<ITask> },
});

const dragStart = (e: DragEvent, item: ITask) => {
  if (e.dataTransfer && props.task) {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("id", item.id);
  }
};
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
