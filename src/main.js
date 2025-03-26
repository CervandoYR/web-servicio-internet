import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

// Bootstrap y estilos
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

// FontAwesome configuración correcta
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faCircleQuestion, faChevronUp, faChevronDown, faXmark,
    faWifi, faNetworkWired, faSignal, faTachometerAlt 
} from '@fortawesome/free-solid-svg-icons'
import { faArrowsLeftRightToLine } from '@fortawesome/free-solid-svg-icons';

// Agregar todos los íconos a la librería
library.add(faCircleQuestion, faChevronUp, faChevronDown, faXmark, faWifi, faNetworkWired, faSignal, faTachometerAlt, faArrowsLeftRightToLine)

// Importar vistas
import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import ContactPage from './views/ContactPage.vue'
import CoberturaPage from './views/CoberturaPage.vue'
import ConocenosPage from './views/ConocenosPage.vue'

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
    history: createWebHashHistory(),
    routes
})

// Crear aplicación
const app = createApp(App)

// Registrar el componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')
