<template>
  <div class="column">
    <h2 class="column__title">{{ props.title }}</h2>

  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: String
})


</script>

<style scoped lang="scss">

</style>
