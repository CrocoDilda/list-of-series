<script setup lang="ts">
type Props = {
  title: string
  genre: string
  year: string
  length: string
}

defineProps<Props>()
</script>

<template>
  <li>
    <button class="card">
      <img
        class="card--image"
        src="https://image.openmoviedb.com/kinopoisk-images/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837/x1000"
        alt="movies"
      />
      <div class="card--description">
        <p class="card--title">
          {{ title }}
        </p>
        <p class="card--genre">{{ genre }}</p>
        <div class="card--inner">
          <p class="card--year">{{ year }}</p>
          <p class="card--length">{{ length }} min</p>
        </div>
      </div>
    </button>
  </li>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  padding: 10px;
  border-radius: 12px;
  max-width: 287px;
  transition: background-color 0.2s;
  background-color: var(--color-main-gray);
  color: var(--color-main-white);
  height: 100%;
  &:hover {
    background-color: var(--color-gray);
  }
  &:hover {
    background-color: var(--color-gray);
  }
}

.card--image {
  height: 400px;
  border-radius: 6px;
}

.card--description {
  display: grid;
  gap: 15px;
  padding-top: 15px;
  font-size: 1rem;
}

.card--title {
}

.card--inner {
  display: flex;
  justify-content: space-between;
}

.card--genre {
}
</style>
