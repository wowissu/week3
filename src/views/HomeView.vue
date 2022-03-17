<script lang="ts">
import { defineComponent } from 'vue'
import TheWelcome from '@/components/TheWelcome.vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    id: String
  },
  components: {
    TheWelcome,
  },
  mounted() {
    // console.log(this.id);
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
