<script setup lang="ts">
import MainButton from '../../components/controls/button/MainButton.vue'

const emit = defineEmits(['callAddMovie'])
</script>

<template>
  <div class="wrapper">
    <h2 class="title">
      В вашей коллекции пока пусто 😞 <br />
      Нажмите, чтобы <span class="title_green">добавить</span> свой первый
      <span class="title_green">фильм</span> или <span class="title_green">сериал</span> 🤩
    </h2>
    <MainButton @click="emit('callAddMovie')" text="Get start" class="button" />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 30px;
}

.title {
  display: block;
  align-self: end;
  font-size: 1.5rem;
  line-height: 1.7;
  text-align: center;
}

.title_green {
  color: var(--color-main-green);
}

.button {
  align-self: start;
}
</style>
