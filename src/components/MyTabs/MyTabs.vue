
<script lang="ts">
import { myTabActiveKey } from '@/components/MyTabs/myTabsConst'
import { computed, defineComponent } from 'vue'

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
      [myTabActiveKey]: computed({
        get: () => this.activeTabName,
        set: (val: string) => { this.activeTabName = val }
      }),
    }
  }
})
</script>

<template>
  <div class="my-tabs">
    <div>
      active: {{ activeTabName }}
    </div>
    <div class="tabs-container">
      <slot></slot>
    </div>
  </div>
</template>


<style>

.tabs-container {
  border: 1px solid #333;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
}
</style>