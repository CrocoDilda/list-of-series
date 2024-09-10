<script setup lang="ts">
import CardComponent from "./CardComponent/CardComponent.vue"

type Props = {
  list: object
}
const props = defineProps<Props>()
</script>

<template>
  <ul class="wraper">
    <!-- <CardComponent
      v-for="(item, index) in list"
      :key="index"
      :title="item.movieName"
      :genre="item.movieGenre"
      :year="item.movieYear"
      :length="item.movieLength"
      :image="item.movieImage"
    /> -->
    <CardComponent
      title="1"
      genre="item.movieGenre"
      year="item.movieYear"
      length="item.movieLength"
      image="item.movieImage"
    />
  </ul>
</template>

<style scoped>
.wraper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px 20px;
}
</style>
