import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const userIsAuthorized = ref<boolean>(false)
  return { userIsAuthorized }
})
