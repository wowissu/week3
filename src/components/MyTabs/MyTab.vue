
<script lang="ts">
import { defineComponent } from 'vue'
import { myTabActiveKey } from './myTabsConst';

export default defineComponent({
  inject: {
    activeTabKey: {
      from: myTabActiveKey
    }
  },
  props: {
    name: { required: true, type: String }
  },
  computed: {
    isActive() {
      return this.activeTabKey === this.name
    }
  },
  created() {
    console.log(this.activeTabKey);
  }
})
</script>

<template>
  <div class="my-tab" :class="{ active: isActive }">
    <slot></slot>
  </div>
</template>
