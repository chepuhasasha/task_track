<template lang="pug">
.task(
  @dragstart="dragStart($event, task)", 
  draggable="true"
  :class='{task__selected: store.selectedID === task.id}'
)
  .task_head
    HTag(tag="h3") {{ task.title }}
    StatusWidget(:status='task.status')
  PTag {{ task.description }}
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type { ITask } from "@/dto/task.interface";
import { useTaskStore } from "@/stores/task";

const props = defineProps({
  task: { type: Object as PropType<ITask> },
});

const store = useTaskStore()

const dragStart = (e: DragEvent, item: ITask) => {
  if (e.dataTransfer && props.task) {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("id", item.id);
    store.select(props.task.id)
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
  cursor: move
  border: var(--border-100)
  &_head
    display: flex
    justify-content: space-between
    align-items: center
  &__selected
    background: var(--contrast-100)
</style>
