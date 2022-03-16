<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: String
  },
  inheritAttrs: false,
  created() {
    console.log(this.$attrs);
  }
})
</script>

<template>
  <main class="fallthrough-attributes">
    <div v-bind="$attrs">
      <span>{{ text }}</span>
    </div>
  </main>
</template>
