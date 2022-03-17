<script lang="ts">
import { defineComponent } from 'vue'
import TheWelcome from '@/components/TheWelcome.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    TheWelcome,
  },
  mounted() {
    console.log(this.$route.params);
  }
})
</script>

<template>
  <main>
    <TheWelcome />

    <div>
      {{ id }}
    </div>
  </main>
</template>
