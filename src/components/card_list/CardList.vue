<script setup lang="ts">
import CardComponent from './card_component/CardComponent.vue'

type Props = {
  list: object
}
const props = defineProps<Props>()
</script>

<template>
  <ul class="wraper">
    <CardComponent
      title="Тайны дворцовых переворотов. Россия, век XVIII. Фильм 5. Вторая невеста императора (2003)"
      genre="Драмма"
      year="2022"
      length="120"
    />
    <!-- <CardComponent v-for="item in list" :key="12" /> -->
  </ul>
</template>

<style scoped>
.wraper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px 20px;
}
</style>
