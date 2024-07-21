<script setup lang="ts">
import TextInput from '../../controls/text_input/TextInput.vue'
import { ref } from 'vue'
import PassHidden from '../../icons/PassHidden.vue'
import PassShow from '../../icons/PassShow.vue'
type Props = {
  labelTitle?: string
  placeholder?: string
  inputType: string
}
const props = defineProps<Props>()

const inputTypeRef = ref(props.inputType)

function changeInputType() {
  if (props.inputType === 'password') {
    inputTypeRef.value === 'text'
      ? (inputTypeRef.value = 'password')
      : (inputTypeRef.value = 'text')
  }
}
</script>

<template>
  <label class="label">
    {{ labelTitle }}
    <TextInput :placeholder="placeholder" :inputType="inputTypeRef" />
    <button
      @click="changeInputType"
      v-if="inputType === 'password'"
      class="visibility"
      type="button"
    >
      <PassShow v-if="inputTypeRef === 'password'" />
      <PassHidden v-else />
    </button>
  </label>
</template>

<style scoped>
.label {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.visibility {
  position: absolute;
  top: 0;
  right: 20px;
  fill: var(--color-main-white);
  height: 20px;
  width: 20px;
  background-color: transparent;
  border-radius: 5px;
  &:focus-visible {
    outline: 3px solid var(--color-main-white);
  }
}
</style>
