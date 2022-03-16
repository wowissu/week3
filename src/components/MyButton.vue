
<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    // text: String as PropType<string>,

    // 必填
    // text: { required: true, type: String as PropType<string> },

    // 多型態
    // text: { required: true, type: [String, Number, Boolean] },

    // 預設值 (有default )
    // text: { default: 'button', type: String as PropType<string> }

    // 驗證
    text: {
      type: String as PropType<string>,
      validator(value: string) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].includes(value)
      }
    }
  }
})
</script>

<template>
  <button>
    {{ text }}
  </button>
</template>
