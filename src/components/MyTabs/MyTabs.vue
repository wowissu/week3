
<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  // props: {
  //   modelValue: { required: true, type: String },
  // },
  data() {
    return {
      activeTabName: 'first'
    }
  },
  provide() {
    return {
      // explicitly provide a computed property
      activeTabKey: this.activeTabName
    }
  }
})
</script>

<template>
  <div class="my-tabs">
    <slot></slot>
  </div>
</template>
