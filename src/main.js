import { createApp } from 'vue'
import { createRouter, createWebHashHistory  } from 'vue-router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from 'aos'
import 'aos/dist/aos.css'


AOS.init();

// Importar vistas
import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import ContactPage from './views/ContactPage.vue'
import CoberturaPage from './views/CoberturaPage.vue';
import ConocenosPage from './views/ConocenosPage.vue';

// Configurar rutas
const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
    { path: '/cobertura', component: CoberturaPage },
    { path: '/conocenos', component: ConocenosPage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
]
const router = createRouter({
    history: createWebHashHistory('/web-servicio-internet/'), // Define el prefijo de las rutas
    routes
})

// Crear aplicación
const app = createApp(App)
app.use(router)
app.mount('#app')