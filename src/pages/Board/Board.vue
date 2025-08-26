<template>
  <div class="board">
    <h1 class="board__title">Mini Trello</h1>
    <Search/>
    <div class="board__columns">
      <Column v-for="column in columns" :key="column.id" :title="column.title"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineAsyncComponent} from "vue";
import Column from "./components/Column.vue";

const Search = defineAsyncComponent(() => import('../../components/Search.vue'));

interface Column {
  id: number,
  title: string,
  code: string
}

const columns: Column[] = [
  {
    id: 1,
    title: 'To Do',
    code: 'todo'
  },
  {
    id: 2,
    title: 'In Progress',
    code: 'progress'
  },
  {
    id: 3,
    title: 'Done',
    code: 'done'
  }
]

</script>

<style scoped lang="scss">
.board {
  width: 100%;
  height: 100svh;
  background-color: #d2defc;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 30px;

  &.__columns {
   display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

</style>
