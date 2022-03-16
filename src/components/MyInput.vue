
<script lang="ts">
import { defineComponent, type PropType } from 'vue'


export default defineComponent({
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({ capitalize: false }),
      type: Object as PropType<{ capitalize: boolean }>
    }
  },
  emits: {
    'update:modelValue'(payload: string) {
      return payload
    }
  },
  methods: {
    emitValue(e: Event) {
      let value = (e.target as HTMLInputElement).value;

      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  }
})
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="emitValue"
  />
</template>
