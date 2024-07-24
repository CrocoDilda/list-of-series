<script setup lang="ts">
import '../children-style.css'

import { ref } from 'vue'

import LabelItem from '../../../components/controls/label/LabelItem.vue'
import MainButton from '../../../components/controls/button/MainButton.vue'

const emit = defineEmits(['changeActiveForm'])

const errorMessage = ref('')
</script>

<template>
  <div class="wrappe">
    <div class="inner">
      <h2 class="title">Registration</h2>
      <LabelItem labelTitle="Unique name" placeholder="My-wonderful_name" inputType="text" />
      <LabelItem labelTitle="Create password" placeholder="********" inputType="password" />
      <LabelItem labelTitle="Repeat password" placeholder="********" inputType="password" />
      <div class="innerr">
        <MainButton type="button" class="button" text="Register" />
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
