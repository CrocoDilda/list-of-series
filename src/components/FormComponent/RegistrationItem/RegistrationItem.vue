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
  repeatPassword: string
}

type Errors = {
  name?: string
  password?: string
  repeatPassword?: string
}

const userData = ref<UserData>({
  name: "",
  password: "",
  repeatPassword: "",
})

const errors = ref<Errors>({})
const errorMessage = ref("")
const loading = ref<boolean>(false)

// Функция проверки валидности строки
function isValid(
  value: string,
  minLength: number,
  maxLength: number
): string | null {
  if (!value) return `Required field`
  if (value.length < minLength)
    return `Must be at least ${minLength} characters`
  if (value.length > maxLength)
    return `Must be no more than ${maxLength} characters`

  return null
}

// Функция для проверки совпадения паролей
function repeatPass(): string | null {
  if (userData.value.password !== userData.value.repeatPassword) {
    return "Passwords do not match"
  }
  return null
}

// Функция для проверки данных на сервере
async function examinationData(userName: string): Promise<boolean> {
  loading.value = true
  try {
    const url = `https://73509f220638bf50.mokky.dev/users?name=${userName}`
    const response = await fetch(url)
    const data = await response.json()

    return data[0]?.name === userName
  } catch (error) {
    console.error("Error during fetch:", error)
    loading.value = false
    return false
  }
}

// Последняя проверка данных
async function lastValidate() {
  if (await examinationData(userData.value.name)) {
    errors.value.name = "This name is taken"
    loading.value = false
  }
}

// Функция валидации всех полей
async function validate(): Promise<boolean> {
  errors.value = {}

  const nameError = isValid(userData.value.name, 2, 25)
  if (nameError) errors.value.name = nameError

  const passwordError = isValid(userData.value.password, 6, 25)
  if (passwordError) errors.value.password = passwordError

  const repeatPasswordError = repeatPass()
  if (repeatPasswordError) {
    errors.value.repeatPassword = repeatPasswordError
  } else {
    const passwordLengthError = isValid(userData.value.repeatPassword, 6, 25)
    if (passwordLengthError) errors.value.repeatPassword = passwordLengthError
  }

  await lastValidate()

  return !Object.keys(errors.value).length
}

// Функция обработки отправки формы
async function submit() {
  if (await validate()) {
    // console.log('Form is valid', userData.value)
    pushData(userData.value.name, userData.value.password)
  } else {
    console.log("Form is invalid")
  }
}

async function pushData(userName: string, password: string) {
  try {
    const url = `https://73509f220638bf50.mokky.dev/users`
    const data = {
      name: userName,
      password: password,
      movie_id: userName,
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    pushToLocalStorage(userData.value.name)
    const responseData = await res.json()
  } catch (error) {
    console.error("Error during fetch:", error)
  } finally {
    loading.value = false
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
      <h2 class="title">Registration</h2>
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
      <LabelItem
        v-model="userData.repeatPassword"
        :errors="errors.repeatPassword"
        labelTitle="Repeat password"
        placeholder="********"
        inputType="password"
      />
      <div class="innerr">
        <ButtonControl
          @click="submit"
          type="button"
          class="button"
          text="Register"
        />
        <ButtonControl
          @click="() => emit('changeActiveForm', 'authorization')"
          type="button"
          class="change-form"
          text="Login"
        />
      </div>
      <p class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>
