// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Comp from './components/Comp.vue'
import Portfolio from './components/Portfolio.vue'
import Home from './components/Home.vue'


app.component('comp', Comp)
app.component('navbar', Navbar)
app.component('aio-header', Header)
app.component('aio-footer', Footer)
app.component('portfolio', Portfolio)
app.component('home', Home)

app.mount('#app')
