<script setup lang="ts">
import LabelItem from '../controls/label/LabelItem.vue'
import MainButton from '../controls/button/MainButton.vue'
import IconClose from '../icons/IconClose.vue'
</script>

<template>
  <div class="wrapper">
    <div class="background"></div>
    <div class="inner">
      <div class="form">
        <button class="close">
          <IconClose />
        </button>
        <LabelItem labelTitle="Name" inputType="text" />
        <LabelItem labelTitle="Film genre" inputType="text" />
        <LabelItem labelTitle="Released" inputType="text" />
        <LabelItem labelTitle="Duration" inputType="text" />
        <LabelItem labelTitle="Movie poster" inputType="text" />
        <MainButton text="Add movie" class="button" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 10;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-main-black);
  opacity: 0.9;
}
.inner {
  background-color: var(--color-gray100);
  padding: 25px;
  transform: translate(-50%);
  border-radius: 15px;
  z-index: 1;
  opacity: 1;
}

.form {
}

.close {
  height: 30px;
  width: 30px;
  fill: var(--color-main-green);
  transition: transform 0.2s;
  background-color: transparent;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    border-radius: 5px;
  }
}
</style>
