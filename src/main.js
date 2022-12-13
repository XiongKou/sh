import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



// 1. 引入Vant
import Vant from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css'

const app = createApp(App);
app.use(router);
app.use(Vant);
app.mount('#app');
