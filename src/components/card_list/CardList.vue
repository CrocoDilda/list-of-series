<script setup lang="ts">
import CardComponent from './card_component/CardComponent.vue'
</script>

<template>
  <ul class="wraper">
    <CardComponent
      title="Тайны дворцовых переворотов. Россия, век XVIII. Фильм 5. Вторая невеста императора (2003)"
    />
    <CardComponent title="Коносуба" />
    <CardComponent title="Богиня благославляет этот прекрасный мир" />
    <CardComponent title="Зелёная книга" />
    <CardComponent title="Капитан арменика" />
  </ul>
</template>

<style scoped>
.wraper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px 20px;
}
</style>
