import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import router from './router'





createApp(App).use(router).mount('#app')
