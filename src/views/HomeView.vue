<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

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

    setTimeout(() => {
      this.$router.push({ name: 'TheWelcome' })
    }, 2000)
  }
})
</script>

<template>
  <main>
    <header>
      <RouterView name="header" />
    </header>
    <RouterView name="main" />
  </main>
</template>
