<template>
  <article class="task-card" :class="{ 'task-card-done': props.task.columnCode === 'done'}">
    <div class="task-card__status" :class="{ 'task-card__status_done': props.task.columnCode === 'done'}"></div>
    <div class="task-card__close">x</div>
    <h3 class="task-card__number">№ {{ props.task.id }}</h3>
    <h2 class="task-card__title">{{ props.task.title }}</h2>
    <p class="task-card__description" v-if="props.task.description">{{ props.task.description }}</p>
  </article>
</template>

<script setup lang="ts">
import type { Task } from '../../../types/task.ts';

const props = defineProps<{
    task: Task
}>()

</script>

<style scoped lang="scss">
.task-card {
  width: 100%;
  background-color: #c3c9d9;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b5b9c7;
  }

  &.task-card-done {
    opacity: 0.7;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    color: #1a1a1a;
  }

  &__number {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    color: #1a1a1a;
  }

  &__description {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    color: #1a1a1a;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: opacity 0.3s ease;

    &:hover {
      color: #1a1a1a;
      opacity: 0.5;
    }
  }
}

</style>
