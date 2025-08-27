<template>
  <div class="board">
    <h1 class="board__title">Mini Trello</h1>
    <Search/>
    <div class="board__columns">
      <ColumnComponent v-for="column in columns" :key="column.id" :title="column.title" :code="column.code"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineAsyncComponent} from "vue";
import type {Column} from "../../types/column.ts";

const Search = defineAsyncComponent(() => import('../../components/Search.vue'));
const ColumnComponent = defineAsyncComponent(() => import('./components/Column.vue'));

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
  padding: 0 16px;
  margin: 0 auto;
  height: 100svh;
  background-color: #d2defc;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 30px;

  &__columns {
    width: 100%;
    height: 100%;
   display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
    gap: 40px;
  }
}

</style>
