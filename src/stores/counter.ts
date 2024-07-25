import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const useUserName = ref<string | null>(localStorage.getItem('user'))
  return { useUserName }
})
