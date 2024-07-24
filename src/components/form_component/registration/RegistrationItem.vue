<script setup lang="ts">
import '../children-style.css'

import { ref } from 'vue'

import LabelItem from '../../../components/controls/label/LabelItem.vue'
import MainButton from '../../../components/controls/button/MainButton.vue'

const emit = defineEmits(['changeActiveForm'])

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
  name: '',
  password: '',
  repeatPassword: ''
})

const errors = ref<Errors>({})

function isValid(name: string, minLength: number, maxLength: number): string | null {
  if (!name) return `Required field`
  if (name.length < minLength) return `Password must be at least ${minLength} characters`
  if (name.length > maxLength) return `Password must be at no more ${maxLength} characters`

  return null
}

function validate(): boolean {
  errors.value = {}

  const nameError = isValid(userData.value.name, 2, 25)
  if (nameError) errors.value.name = nameError

  const passwordError = isValid(userData.value.password, 6, 25)
  if (passwordError) errors.value.password = passwordError

  const repeatPasswordError =
    repeatPass() === null ? isValid(userData.value.repeatPassword, 6, 25) : repeatPass()
  if (repeatPasswordError) errors.value.repeatPassword = repeatPasswordError

  return !Object.keys(errors.value).length
}

function repeatPass(): null | string {
  if (userData.value.password !== userData.value.repeatPassword) {
    return 'Passwords do not match'
  }
  return null
}

function submit() {
  if (validate()) {
    console.log('Form is valid', userData.value)
  } else {
    console.log('Form is invalid')
  }
}
</script>

<template>
  <div class="wrappe">
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
        <MainButton @click="submit" type="button" class="button" text="Register" />
        <MainButton
          @click="() => emit('changeActiveForm', 'authorization')"
          type="button"
          class="change-form"
          text="Login"
        />
      </div>
    </div>
  </div>
</template>
