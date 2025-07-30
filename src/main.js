import { createApp } from 'vue'

import './assets/main.css'

import { i18n } from './i18n'
import App from './App.vue'
import router from '../src/router'

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')