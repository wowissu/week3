
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: { required: true, type: String }
  },
  inject: {
    activeTabKey: {
      from: 'activeTabKey',
    }
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
