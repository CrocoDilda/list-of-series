<script setup lang="ts">
import "./types"
import { useShowInfo } from "./types"

import LabelItem from "../controls/LabelControl/LabelControls.vue"
import ButtonControl from "../controls/ButtonControl/ButtonControl.vue"
import IconClose from "../icons/IconClose.vue"
import IconInformation from "../icons/IconInformation.vue"

const { showInfo, changeShowInfo } = useShowInfo()
const emit = defineEmits(["callAddMovie"])
</script>

<template>
  <div class="wrapper">
    <div class="background"></div>
    <div class="innerrr">
      <div v-if="showInfo" class="explanation">
        <div @click="changeShowInfo" class="explanation--background"></div>
        <p class="explanation--description">
          При нажатии на кнопку <b>Autocomplete</b> вы запросите данные по
          названию, указанному в поле <b>"Name"</b>, с удалённой базы данных
          фильмов. Остальные поля будут автоматически заполнены
          <span class="expalnation--smile">😲</span> . Проверьте корректность
          введённого названия и полученных данный. Возможно сервис вернул не то,
          что вы имели ввиду. Так же вы можете вручную заполнить все поля
          <span class="expalnation--smile">🥲</span>. Никакие поля, кроме
          <b>"Name"</b>, не являются обязательными к заполнению
          <span class="expalnation--smile">🫣</span>.
        </p>
      </div>
      <div class="form">
        <button @click="emit('callAddMovie')" class="close">
          <IconClose />
        </button>
        <LabelItem labelTitle="Name" placeholder="Film name" inputType="text" />
        <div class="autocomplete">
          <ButtonControl text="Autocomplete" class="autocomplete--button" />
          <button @click="changeShowInfo" class="autocomplete--info">
            <IconInformation class="info" />
          </button>
        </div>
        <LabelItem
          labelTitle="Film genre"
          placeholder="Drama, action"
          inputType="text"
        />
        <LabelItem labelTitle="Released" placeholder="2022" inputType="text" />
        <LabelItem
          labelTitle="Duration"
          placeholder="120 min"
          inputType="text"
        />
        <LabelItem
          labelTitle="Movie poster"
          placeholder="https://kinopoisk-ru/film"
          inputType="text"
        />
        <ButtonControl text="Add movie" class="button" />
      </div>
    </div>
  </div>
</template>
