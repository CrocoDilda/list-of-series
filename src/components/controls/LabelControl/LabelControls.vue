<script setup lang="ts">
import "./style.css"

import TextInput from "../InputControl/InputControl.vue"
import { ref } from "vue"
import PassHidden from "../../icons/PassHidden.vue"
import PassShow from "../../icons/PassShow.vue"

type Props = {
  labelTitle?: string
  placeholder?: string
  inputType: string
  errors?: string | null
}
const props = defineProps<Props>()

const inputTypeRef = ref(props.inputType)
const inputValue = ref("")

const model = defineModel<string>()

function returnInputValue() {
  model.value = inputValue.value
}

function changeInputType() {
  inputTypeRef.value = inputTypeRef.value === "password" ? "text" : "password"
}
</script>

<template>
  <label class="label">
    {{ labelTitle }}
    <TextInput
      @input="returnInputValue"
      v-model="inputValue"
      :placeholder="placeholder"
      :inputType="inputTypeRef"
    />

    <p class="label--error">{{ errors }}</p>

    <MainButton
      @click="changeInputType"
      v-if="inputType === 'password'"
      class="visibility"
      type="button"
    >
      <PassShow v-if="inputTypeRef === 'password'" />
      <PassHidden v-else />
    </MainButton>
  </label>
</template>
