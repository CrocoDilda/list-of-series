// Пытался импортировать отсюда логику в компонент, но не получилось и я забил

import { ref } from "vue"

type Props = {
  labelTitle?: string
  placeholder?: string
  inputType: string
}

export function componentLogic() {
  const props = defineProps<Props>()

  const inputTypeRef = ref(props.inputType)
  const inputValue = ref("")
  const iputInvalid = ref(true)

  function changeInputType() {
    if (props.inputType === "password") {
      inputTypeRef.value === "text"
        ? (inputTypeRef.value = "password")
        : (inputTypeRef.value = "text")
    }
  }

  return {
    props,
    inputTypeRef,
    inputValue,
    iputInvalid,
    changeInputType,
  }
}

// <script setup lang="ts">
// import './style.css'
// import { componentLogic } from './types'

// import TextInput from '../../controlsInputControls/TextInput.vue'
// import PassHidden from '../../icons/PassHidden.vue'
// import PassShow from '../../icons/PassShow.vue'

// const { props, inputTypeRef, changeInputType, inputValue, iputInvalid } = componentLogic()
// </script>
