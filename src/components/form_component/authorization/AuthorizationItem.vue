<script setup lang="ts">
import '../children-style.css'

import { ref } from 'vue'

import LabelItem from '../../../components/controls/label/LabelItem.vue'
import MainButton from '../../../components/controls/button/MainButton.vue'

const emit = defineEmits(['changeActiveForm'])

type UserData = {
  name: string
  password: string
}

type Errors = {
  name?: string
  password?: string
}

const userData = ref<UserData>({
  name: '',
  password: ''
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

  return !Object.keys(errors.value).length
}

function submit() {
  if (validate()) {
    console.log('Form is valid', userData.value)
  } else {
    console.log('Form is invalid')
  }
}

async function pushData() {}
</script>

<template>
  <div class="wrappe">
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
        <MainButton @click="submit" type="button" class="button" text="Login" />
        <MainButton
          @click="() => emit('changeActiveForm', 'registration')"
          type="button"
          class="change-form"
          text="Register"
        />
      </div>
    </div>
  </div>
</template>
