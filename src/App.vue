<template>
  <Board />
</template>


<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const Board = defineAsyncComponent(() => import('./pages/Board/Board.vue'));

</script>

<style scoped>

</style>
