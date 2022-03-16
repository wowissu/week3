
<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({

})
</script>

<template>
  <div class="my-slot">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="default"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
