
<script lang="ts">
import { defineComponent, type PropType } from 'vue'


export default defineComponent({
  props: {
    content: String
  },
  emits: {
    'update:content'(payload: string) {
      return true
    }
  },
  methods: {
    emitValue(e: Event) {

      let value = (e.target as HTMLInputElement).value;

      // if (this.modelModifiers.capitalize) {
      //   value = value.charAt(0).toUpperCase() + value.slice(1)
      // }
      this.$emit('update:content', value)
    }
  }
})
</script>

<template>
  <input
    type="text"
    :value="content"
    @input="emitValue"
  />
</template>
