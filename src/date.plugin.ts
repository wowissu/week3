
import type { Plugin } from 'vue';
import dayjs from 'dayjs';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $date: (date: Date) => string
  }
}

export default {
  install(app, options) {
    // console.log(app, options);

    app.config.globalProperties.$date = function (date: Date) {
      return dayjs(date).format('YYYY-MM-DD');
    }
  }
} as Plugin