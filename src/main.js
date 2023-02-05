import { createApp } from 'vue'
import './assets/style/default.scss'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'Pinia'

var application = createApp(App)
const pinia = createPinia();

application.use(router)
application.use(pinia)
application.mount('#app')
