<template>
  <div class="column">
    <h2 class="column__title">{{ props.title }}</h2>

    <div class="column__tasks">

      <TaskCard v-for="task in tasks" :key="task.id" :task="task" />

    </div>

  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useTasksStore } from '../../../store/tasksStore.ts';
const TaskCard = defineAsyncComponent(() => import('../components/TaskCard.vue'));

const tasksStore = useTasksStore();

const props = defineProps({
  title: String,
  code: String
});

const tasks = tasksStore.getTasksList.filter(task => task.columnCode === props.code);


</script>

<style scoped lang="scss">
.column {
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 20px;
  border: 4px solid #d2defc;

  &__title {
    width: 100%;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 2px solid #d2defc;
  }

  &__tasks {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 10px;
  }

}

</style>
