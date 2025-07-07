import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import Comp from '@/components/Comp.vue'
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

app.component('comp', Comp)
app.component('navbar', Navbar)
app.component('aio-header', Header)
app.component('aio-footer', Footer)

app.mount('#app')
