<script lang="ts">
import { defineComponent } from 'vue'
import TheWelcome from '@/components/TheWelcome.vue'
import MyButton from '@/components/MyButton.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    TheWelcome,
    MyButton
  }
})
</script>

<template>
  <main>

    <div>
      <MyButton :text="'我的按鈕'"></MyButton>
    </div>

    <TheWelcome />
  </main>
</template>
