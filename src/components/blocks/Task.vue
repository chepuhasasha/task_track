<template lang="pug">
.task(
  @dragstart="dragStart($event, task)",
  :draggable="!nodrag",
  :class="{ task__selected: store.selectedID === task.id }"
  :style="{ cursor: !nodrag ? 'move' : 'default'}"
)
  .task_head
    HTag(tag="h3") {{ task.title }}
    StatusWidget(:status="task.status")
  PTag(v-if='!minimize') {{ task.description }}
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type { ITask } from "@/dto/task.interface";
import { useTaskStore } from "@/stores/task";

const props = defineProps({
  task: { type: Object as PropType<ITask> },
  nodrag: { type: Boolean as PropType<boolean>, default: false },
  minimize: { type: Boolean as PropType<boolean>, default: false },
});

const store = useTaskStore();

const dragStart = (e: DragEvent, item: ITask) => {
  if (e.dataTransfer && props.task && !props.nodrag) {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("id", item.id);
    store.select(props.task.id);
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
  border: var(--border-100)
  &_head
    display: flex
    justify-content: space-between
    align-items: center
  &__selected
    background: var(--contrast-100)
</style>
