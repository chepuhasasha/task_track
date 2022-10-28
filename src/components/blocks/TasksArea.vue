<template lang="pug">
.tasksArea(@drop="onDrop($event)", @dragenter.prevent, @dragover.prevent)
  .tasksArea_head
    HTag(tag="h2") {{ title }}
    span {{ tasks.length }}
  TransitionGroup.tasksArea_body(name="list" tag="div")
    Task(v-for="task in tasks", :key="task.id", :task="task")
</template>
<script setup lang="ts">
import type { ITask } from "@/dto/task.interface";
import type { PropType } from "vue";
import { useTaskStore } from "@/stores/task";
import Task from "@/components/blocks/Task.vue";

const props = defineProps({
  title: { type: String as PropType<string>, default: "TO DO" },
  status: { type: String as PropType<ITask["status"]> },
  tasks: { type: Array as PropType<ITask[]>, default: () => [] },
});

const store = useTaskStore();

const onDrop = (e: DragEvent) => {
  if (props.status && e.dataTransfer) {
    store.updateStatus(props.status, e.dataTransfer.getData("id"));
    store.select(null)
  }
};
</script>
<style lang="sass">
.tasksArea
  display: flex
  flex-direction: column
  gap: 10px
  background: var(--contrast-100)
  border-radius: 10px
  padding: 20px
  border: var(--border-100)
  height: 100%
  width: 100%
  max-height: 100%
  max-width: 100%
  overflow-y: auto
  &_head
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center
    span
      font: var(--font-200)
      color: var(--text-color-300)
  &_body
    position: relative
    display: flex
    flex-direction: column
    gap: 10px

.list-move,
.list-enter-active,
.list-leave-active
  transition: all 0.5s ease

.list-enter-from,
.list-leave-to
  opacity: 0
  transform: translateX(30px)

.list-leave-active
  position: absolute
  width: 100%
</style>
