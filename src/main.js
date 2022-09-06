import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'

createApp(App)
    .use(router) //use메소드를 사용함 특정 플러그인을 사용할 때 사용
    .mount('#app')