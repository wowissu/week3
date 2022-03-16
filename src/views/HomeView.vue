<script lang="ts">
import { defineComponent } from 'vue'
import TheWelcome from '@/components/TheWelcome.vue'
import MyButton from '@/components/MyButton.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    TheWelcome,
    MyButton
  },
  methods: {
    onAddBook(payload: any) {
      console.log(payload);
    }
  }
})
</script>

<template>
  <main>

    <div>
      <MyButton :text="'我的按鈕'" @addBook="onAddBook"></MyButton>
    </div>

    <TheWelcome />
  </main>
</template>
