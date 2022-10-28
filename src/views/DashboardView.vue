
<template lang="pug">
.dashboard
  .dashboard_head
    HTag Tasks
  TasksArea(v-area="'2/1/3/2'", status="todo", title="TO DO", :tasks="todo")
  TasksArea(
    v-area="'2/2/3/3'",
    status="inwork",
    title="IN WORK",
    :tasks="inwork"
  )
  TasksArea(v-area="'2/3/3/4'", status="ready", title="READY", :tasks="ready")
</template>

<script setup lang="ts">
import { useTaskStore } from "@/stores/task";
import TasksArea from "@/components/blocks/TasksArea.vue";
import { computed, ref } from "vue";
import type { ITask } from "@/dto/task.interface";

const store = useTaskStore();

const todo = computed(() =>
  store.getTasks.filter((task) => task.status === "todo")
);
const inwork = computed(() =>
  store.getTasks.filter((task) => task.status === "inwork")
);
const ready = computed(() =>
  store.getTasks.filter((task) => task.status === "ready")
);
</script>
<style lang="sass">
.dashboard
  display: grid
  grid-template-rows: max-content 1fr
  grid-template-columns: repeat(3, 1fr) 300px
  gap: 10px
  padding: 10px
  width: 100%
  height: 100%
  // max-height: 100vh
  // max-width: 100vw
  background: var(--contrast-100)
  &_head
    padding: 20px
    grid-area: 1 / 1 / 2 / 4
  pre
    color: white
</style>