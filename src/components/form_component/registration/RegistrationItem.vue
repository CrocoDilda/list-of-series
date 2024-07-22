<script setup lang="ts">
import '../children-style.css'
import LabelItem from '../../../components/controls/label/LabelItem.vue'
import MainButton from '../../../components/controls/button/MainButton.vue'

const emit = defineEmits(['changeActiveForm'])
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
    </div>
  </div>
</template>
