<script setup lang="ts">
import { inject } from 'vue'
import IconClapperboard from '../../components/icons/IconClapperboard.vue'
import MainButton from '../../components/controls/button/MainButton.vue'
import './style.css'
const appName = inject('appName')
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <p class="app-name">{{ appName }}</p>
    </header>
    <main class="content">
      <section class="title">
        <IconClapperboard class="title--icon" />
        <h1 class="title--text">
          Welcome to <br />
          <span class="title--name">{{ appName }}</span>
        </h1>
      </section>
      <section class="description">
        <p>
          Добавляйте фильмы или сериалы, что так хотели посмотреть, но всё время забывали и
          избавьтесь от трудного выбора в нужный момент.
        </p>
      </section>
      <section class="start">
        <MainButton class="button sing-in--button" text="Sing in" />
        <MainButton class="button" text="Create account" />
      </section>
    </main>
  </div>
</template>
