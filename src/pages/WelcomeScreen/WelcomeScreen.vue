<script setup lang="ts">
import "./style.css"
import { inject } from "vue"

import IconClapperboard from "../../components/icons/IconClapperboard.vue"
import ButtonControl from "../../components/controls/ButtonControl/ButtonControl.vue"
const appName = inject("appName")

const emit = defineEmits(["callForm"])
</script>

<template>
  <div class="wrapper">
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
          Добавляйте фильмы или сериалы, что так хотели посмотреть, но всё время
          забывали и избавьтесь от трудного выбора в нужный момент.
        </p>
      </section>
      <section class="start">
        <ButtonControl
          @click="() => emit('callForm', 'authorization')"
          text="Sing in"
          class="button sing-in--button"
        />
        <ButtonControl
          @click="() => emit('callForm', 'registration')"
          text="Create account"
          class="button"
        />
      </section>
    </main>
  </div>
</template>
