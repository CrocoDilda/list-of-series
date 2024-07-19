import './style.css'

import { ref } from 'vue'

export function componentLogic() {
  const count = ref<number>(1)

  function increment() {
    count.value++
  }
  return {
    count,
    increment
  }
}
