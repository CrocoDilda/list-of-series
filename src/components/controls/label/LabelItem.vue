<script setup lang="ts">
import './style.css'

import TextInput from '../../controls/text_input/TextInput.vue'
import { ref, computed, watch } from 'vue'
import PassHidden from '../../icons/PassHidden.vue'
import PassShow from '../../icons/PassShow.vue'
type Props = {
  labelTitle?: string
  placeholder?: string
  inputType: string
  valueInvalid?: boolean
}
const props = defineProps<Props>()

const inputTypeRef = ref(props.inputType)
const inputValue = ref('')
const inputInvalid = ref(props.valueInvalid)
const minLength = computed(() => (inputTypeRef.value === 'text' ? 2 : 6))
const maxLength = ref(25)

function changeInputType() {
  inputTypeRef.value = inputTypeRef.value === 'password' ? 'text' : 'password'
}
function validateInput() {
  if (inputValue.value.length < minLength.value && inputValue.value.length < maxLength.value) {
    inputInvalid.value = true
    return `Min length ${minLength.value} symbol`
  } else if (inputValue.value.length >= maxLength.value + 1) {
    inputInvalid.value = true
    return `Max length ${maxLength.value} symbol`
  } else {
    inputInvalid.value = false
  }
}
</script>

<template>
  <label class="label">
    {{ labelTitle }}
    <TextInput
      @input="validateInput"
      v-model="inputValue"
      :placeholder="placeholder"
      :inputType="inputTypeRef"
      :isInValid="inputInvalid"
    />

    <p v-if="inputInvalid" class="label--error">{{ validateInput() }}</p>

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
