<script setup lang="ts">
import TextInput from '../../../components/controls/text_input/TextInput.vue'
import MainButton from '../../../components/controls/button/MainButton.vue'
</script>

<template>
  <form action="" class="form">
    <div class="form--wrapper">
      <h2 class="title">Registration</h2>
      <TextInput />
      <TextInput />
      <TextInput />
      <MainButton class="button" text="Register" />
    </div>
  </form>
</template>

<style scoped>
.form {
  display: block;
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  padding: 40px 30px;
  background-color: var(--color-gray);
  border-radius: 20px;
}

.form--wrapper {
  display: grid;
  gap: 25px;
}

.title {
  font-size: 1.5rem;
  text-align: center;
}

.button {
  background-color: var(--color-main-green);
}
</style>
