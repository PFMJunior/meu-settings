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
import './index.css' // Tailwind

// opcional: importa para garantir que o composable aplique styles se necessário
// import { useTheme } from './composables/useTheme'
// const { theme } = useTheme()
// (não precisa fazer nada aqui; import garante efeito no módulo)

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.use(DialogService)
app.component('DynamicDialog', DynamicDialog)
app.use(VueQueryPlugin)
app.component('InputSwitch', InputSwitch)
app.mount('#app')
