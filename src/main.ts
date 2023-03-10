import { createApp } from 'vue';
import route from './routes/main';
import './main.less';
import './main.scss';
import Main from './main.vue';

createApp(Main)
  .use(route)
  .mount('#app');
