import {defineStore} from 'pinia';
import type {Task} from "../types/task.ts";


export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        columnCode: 'todo',
        description: 'Task 1 description'
      },
      {
        id: 2,
        title: 'Task 2',
        columnCode: 'progress'
      },
      {
        id: 3,
        title: 'Task 3',
        columnCode: 'done',
        description: 'Task 3 description'
      },
      {
        id: 4,
        title: 'Task 4',
        columnCode: 'todo'
      },
      {
        id: 5,
        title: 'Task 5',
        columnCode: 'progress',
        description: 'Task 5 description'
      },
      {
        id: 6,
        title: 'Task 6',
        columnCode: 'done'
      }
    ] as Task[],
    currentTask: null as Task | null,
    isTaskModalOpen: false as boolean
  }),
  getters: {
    getTasksList(): Task[] {
      return this.tasks;
    },
    getCurrentTask(): Task | null {
      return this.currentTask;
    },
    getIsTaskModalOpen(): boolean {
        return this.isTaskModalOpen;
    }
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
    updateTask(task: Task) {
      const index = this.tasks.findIndex(t => t.id === task.id)
      if (index !== -1) {
        this.tasks[index] = task
      }
    },
    setCurrentTask(task: Task) {
      this.currentTask = task;
    },
    showTaskModal(payload: boolean) {
      this.isTaskModalOpen = payload;
    }
  }
})
