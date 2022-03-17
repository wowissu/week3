<script lang="ts">
import { defineComponent } from 'vue'
import {RouterView} from 'vue-router'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    RouterView
  },
  props: {
    id: String
  },
  mounted() {
    // console.log(this.id);
  }
})
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
