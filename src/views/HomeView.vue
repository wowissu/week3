<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    RouterView,
    RouterLink
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
    <div>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    </div>
    <div>
      <RouterLink :to="{ name: 'TheWelcome' }">TheWelcome</RouterLink>
    </div>
    <!-- <header>
      <RouterView name="header" />
    </header> -->
    <RouterView name="main" />
  </main>
</template>
