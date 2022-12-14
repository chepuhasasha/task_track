import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { ITask } from "@/dto/task.interface";

interface ITaskState {
  selectedID: string | null;
  tasks: ITask[];
}

export const useTaskStore = defineStore("tasks", {
  state: (): ITaskState => ({
    selectedID: null,
    tasks: [
      {
        id: "09213092109",
        title: "Test task #1",
        description:
          "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        createdAt: 0,
        status: "todo",
      },
      {
        id: "09213092110",
        title: "Test task #2",
        description:
          "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        createdAt: 0,
        status: "todo",
      },
      {
        id: "09213092111",
        title: "Test task #3",
        description:
          "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        createdAt: 0,
        status: "todo",
      },
    ],
  }),
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
  actions: {
    updateStatus(status: ITask["status"], id: string) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    select(id: string | null) {
      this.selectedID = id;
    },
  },
});
