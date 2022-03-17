
<script lang="ts">
import { defineComponent } from 'vue'
import { myTabActiveKey } from './myTabsConst';

export default defineComponent({
  inject: {
    activeTabKey: {
      from: myTabActiveKey
    }
  },
  props: {
    name: { required: true, type: String }
  },
  computed: {
    isActive() {
      return this.activeTabKey.value === this.name
    }
  },
  methods: {
    setToActive() {
      this.activeTabKey.value = this.name

      // console.log(this.activeTabKey.value)
    }
  },
  created() {
    console.log(this.activeTabKey.value);
  }
})
</script>

<template>
  <div class="my-tab" :style="{ color: isActive ? 'red' : '' }" @click="setToActive">
    <slot></slot>
  </div>
</template>


<style>

.my-tab {
  border: 1px solid #333;
  border-radius: 10px;
  padding: 10px;
}
</style>