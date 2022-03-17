import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import DatePlugin from './date.plugin';

import App from './App.vue'
// import router from './router'

const app = createApp(App)

const customOptions = {
  foo: 'bar'
}

app.use(DatePlugin, customOptions)

// app.use(createPinia())
// app.use(router)

app.mount('#app')
