<script lang="ts">
import { defineComponent } from 'vue'
import TheWelcome from '@/components/TheWelcome.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    TheWelcome,
  }
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
