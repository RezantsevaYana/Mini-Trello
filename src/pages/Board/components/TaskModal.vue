<template>
  <Transition>
  <div class="modal" v-if="isOpen">
    <div class="modal__overlay"></div>
    <div class="modal__wrapper">
      <h3>{{ currentTask? 'Редактирование задачи' : 'Создание задачи' }}</h3>

      <Input v-model="currentTask?.title" label="Заголовок задачи" />
      <Textarea v-model="currentTask?.description" label="Описание задачи" />

    </div>
  </div>
  </Transition>
</template>

<script setup lang="ts">
import {useTasksStore} from "../../../store/tasksStore.ts";
import {computed} from "vue";

const tasksStore = useTasksStore();

const isOpen = computed(() => tasksStore.getIsTaskModalOpen);
const currentTask = computed(() => tasksStore.getCurrentTask);


</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
