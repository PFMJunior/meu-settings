// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import DialogService from 'primevue/dialogservice'
import DynamicDialog from 'primevue/dynamicdialog'
import InputSwitch from 'primevue/inputswitch'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import './index.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.use(DialogService)
app.component('DynamicDialog', DynamicDialog)
app.use(VueQueryPlugin)
app.component('InputSwitch', InputSwitch)
app.mount('#app')
