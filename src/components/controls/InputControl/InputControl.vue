<script setup lang="ts">
type Props = {
  placeholder?: string
  inputType: string
  isInValid?: boolean
}
const props = defineProps<Props>()

const model = defineModel<string>()
</script>

<template>
  <input
    :placeholder="placeholder"
    v-model="model"
    :class="'text-input' + (isInValid ? ' invalid' : '')"
    :type="inputType"
  />
</template>

<style scoped>
.text-input {
  padding: 10px 20px;
  border-radius: 15px;
  background-color: transparent;
  border: 2px solid var(--color-gray);
  color: var(--color-main-white);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    outline: 2px solid var(--color-main-white);
  }
}

.invalid {
  border: 3px solid var(--color-red);
}
</style>
