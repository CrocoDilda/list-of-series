<script setup lang="ts">
import "../children-style.css"

import { ref } from "vue"

import LabelItem from "../../controls/LabelControl/LabelControls.vue"
import ButtonControl from "../../controls/ButtonControl/ButtonControl.vue"
import IconLoading from "../../../components/icons/IconLoading.vue"

import { useCounterStore } from "../../../stores/counter"
const autorizated = useCounterStore() // Получаем хранилище

const emit = defineEmits(["changeActiveForm"])

type UserData = {
  name: string
  password: string
}

type Errors = {
  name?: string
  password?: string
}

const userData = ref<UserData>({
  name: "",
  password: "",
})

const errors = ref<Errors>({})
const errorMessage = ref("")
const loading = ref<boolean>(false)

// Функция проверки валидности строки
function isValid(
  name: string,
  minLength: number,
  maxLength: number
): string | null {
  if (!name) return `Required field`
  if (name.length < minLength) return `Must be at least ${minLength} characters`
  if (name.length > maxLength)
    return `Must be no more than ${maxLength} characters`

  return null
}

// Функция валидации всех полей
function validate(): boolean {
  errors.value = {}

  const nameError = isValid(userData.value.name, 2, 25)
  if (nameError) errors.value.name = nameError

  const passwordError = isValid(userData.value.password, 6, 25)
  if (passwordError) errors.value.password = passwordError

  return !Object.keys(errors.value).length
}

// Функция обработки отправки формы
async function submit() {
  if (validate()) {
    loading.value = true
    try {
      const success = await pushData(
        userData.value.name,
        userData.value.password
      )
      if (!success) {
        errorMessage.value = "Error. Check that the entered data is correct"
      } else {
        errorMessage.value = ""
        pushToLocalStorage(userData.value.name)
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error)
      errorMessage.value =
        "An unexpected error occurred. Please try again later."
    } finally {
      loading.value = false
    }
  }
}

async function pushData(userName: string, password: string): Promise<boolean> {
  try {
    const url = `https://73509f220638bf50.mokky.dev/users?name=${userName}&password=${password}`

    const response = await fetch(url)
    const data = await response.json()

    return data[0]?.name === userName
  } catch (error) {
    console.error("Error during fetch:", error)
    return false
  }
}

function pushToLocalStorage(value: string) {
  localStorage.setItem("user", value)
  autorizated.useUserName = value
}
</script>

<template>
  <div class="wrappe">
    <IconLoading class="loading" v-if="loading" />
    <div class="inner">
      <h2 class="title">Authorization</h2>
      <LabelItem
        v-model="userData.name"
        :errors="errors.name"
        labelTitle="Unique name"
        placeholder="My-wonderful_name"
        inputType="text"
      />
      <LabelItem
        v-model="userData.password"
        :errors="errors.password"
        labelTitle="Create password"
        placeholder="********"
        inputType="password"
      />
      <div class="innerr">
        <ButtonControl
          @click="submit"
          type="button"
          class="button"
          text="Login"
        />
        <ButtonControl
          @click="() => emit('changeActiveForm', 'registration')"
          type="button"
          class="change-form"
          text="Register"
        />
      </div>
      <p class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>
