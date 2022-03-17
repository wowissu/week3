
<script lang="ts">
import { myTabActiveKey } from '@/components/MyTabs/myTabsConst'
import { defineComponent } from 'vue'

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
      [myTabActiveKey]: this.activeTabName
    }
  }
})
</script>

<template>
  <div class="my-tabs">
    <slot></slot>
  </div>
</template>
