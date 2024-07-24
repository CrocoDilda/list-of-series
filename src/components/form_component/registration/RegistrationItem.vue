<script setup lang="ts">
import '../children-style.css'

import { ref } from 'vue'

import LabelItem from '../../../components/controls/label/LabelItem.vue'
import MainButton from '../../../components/controls/button/MainButton.vue'

const emit = defineEmits(['changeActiveForm'])

type RoughData = {
  name: string
  password: string
  repeatPassword: string
}

type Errors = {
  name?: string
  password?: string
  repeatPassword?: string
}

const roughData = ref<RoughData>({
  name: '',
  password: '',
  repeatPassword: ''
})

const errors = ref<Errors>({})
const errorMessage = ref('')

// Функция проверки валидности строки
function isValid(value: string, minLength: number, maxLength: number): string | null {
  if (!value) return `Required field`
  if (value.length < minLength) return `Must be at least ${minLength} characters`
  if (value.length > maxLength) return `Must be no more than ${maxLength} characters`

  return null
}

// Функция для проверки совпадения паролей
function repeatPass(): string | null {
  if (roughData.value.password !== roughData.value.repeatPassword) {
    return 'Passwords do not match'
  }
  return null
}

// Функция для проверки данных на сервере
async function examinationData(userName: string): Promise<boolean> {
  try {
    const url = `https://73509f220638bf50.mokky.dev/users?name=${userName}`
    const response = await fetch(url)
    const data = await response.json()

    return data[0]?.name === userName
  } catch (error) {
    console.error('Error during fetch:', error)
    return false
  }
}

// Последняя проверка данных
async function lastValidate() {
  if (await examinationData(roughData.value.name)) {
    errors.value.name = 'This name is taken'
  }
}

// Функция валидации всех полей
async function validate(): Promise<boolean> {
  errors.value = {}

  const nameError = isValid(roughData.value.name, 2, 25)
  if (nameError) errors.value.name = nameError

  const passwordError = isValid(roughData.value.password, 6, 25)
  if (passwordError) errors.value.password = passwordError

  const repeatPasswordError = repeatPass()
  if (repeatPasswordError) {
    errors.value.repeatPassword = repeatPasswordError
  } else {
    const passwordLengthError = isValid(roughData.value.repeatPassword, 6, 25)
    if (passwordLengthError) errors.value.repeatPassword = passwordLengthError
  }

  await lastValidate()

  return !Object.keys(errors.value).length
}

// Функция обработки отправки формы
async function submit() {
  if (await validate()) {
    console.log('Form is valid', roughData.value)
    pushData(roughData.value.name, roughData.value.password)
  } else {
    console.log('Form is invalid')
  }
}

async function pushData(userName: string, password: string) {
  try {
    const url = `https://73509f220638bf50.mokky.dev/users`

    const data = {
      name: userName,
      password: password
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }

    const responseData = await res.json()
    console.log('Response from server:', responseData)
  } catch (error) {
    console.error('Error during fetch:', error)
  }
}
</script>
<template>
  <div class="wrappe">
    <div class="inner">
      <h2 class="title">Registration</h2>
      <LabelItem
        v-model="roughData.name"
        :errors="errors.name"
        labelTitle="Unique name"
        placeholder="My-wonderful_name"
        inputType="text"
      />
      <LabelItem
        v-model="roughData.password"
        :errors="errors.password"
        labelTitle="Create password"
        placeholder="********"
        inputType="password"
      />
      <LabelItem
        v-model="roughData.repeatPassword"
        :errors="errors.repeatPassword"
        labelTitle="Repeat password"
        placeholder="********"
        inputType="password"
      />
      <div class="innerr">
        <MainButton @click="submit" type="button" class="button" text="Register" />
        <MainButton
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
