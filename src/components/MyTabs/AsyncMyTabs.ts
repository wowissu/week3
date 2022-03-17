import { defineAsyncComponent } from 'vue'


export const AsyncMyTabs = defineAsyncComponent(() => import('./MyTabs.vue'));