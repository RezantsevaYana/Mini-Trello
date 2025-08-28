<template>
  <div class="input-wrapper">
    <label class="input-wrapper__label" v-if="label" :for="id">{{ props.label }}</label>
    <input
        class="input-wrapper__input"
        :id="id"
        :type="type"
        :value="modelValue"
        @input="updateValue"
        :class="{ 'has-error': !!error }"
        :placeholder="placeholder"
    />
    <p v-if="error" class="input-wrapper__error-message">{{ props.error }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  label?: string
  type?: string
  error?: string
  id?: string
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped lang="scss">
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  &__label {
    font-size: 16px;
    font-weight: 500;
  }
  &__input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #d2defc;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    &.has-error {
      border-color: red;
    }
  }
  &__error-message {
    color: red;
    font-size: 14px;
  }
}
</style>
