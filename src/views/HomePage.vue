<template>
    <div id="home" class="home-page container mt-5">
        <!-- Sección de bienvenida con animación -->
        <div class="row text-center mb-5">
            <div class="col-md-12">
                <h1 class="display-3 animated fadeInDown welcome-title" style="
            font-family: 'Poppins', sans-serif; 
            background: linear-gradient(to right, #000000, #ffff00);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
        ">
                    Conéctate al Futuro con <span class="highlight">NetSystems</span>
                </h1>
                <div class="decorative-banner">
                    <p class="lead moving-text">La mejor conexión a Internet para tu hogar y negocio.</p>
                </div>
            </div>
        </div>

        <!-- Sección de beneficios con carrusel -->
        <div id="benefitsCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div v-for="(benefit, index) in benefits" :key="benefit.id" class="carousel-item"
                    :class="{ active: index === 0 }" data-bs-interval="3000">
                    <img :src="benefit.image" class="d-block w-100 benefit-img" :alt="benefit.title">
                    <div class="carousel-caption d-block">
                        <h3>{{ benefit.title }}</h3>
                        <p>{{ benefit.description }}</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#benefitsCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#benefitsCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>


        <!-- Sección de planes -->
        <div class="row mt-5 text-center" id="plans">
            <h2 class="display-4 animated fadeIn text-center fw-bold" data-aos="fade-up">
                ¡CERO COSTO DE INSTALACIÓN EN <span class="d-block red-text">TODOS NUESTROS PLANES</span>
                <span class="d-block">DE INTERNET 100% FIBRA ÓPTICA!</span>
            </h2>


            <div class="col-lg-4 col-md-4 col-12" v-for="plan in plans" :key="plan.id" data-aos="fade-down-right">
                <div class="plan-box">
                    <h3>{{ plan.name }}</h3>
                    <p>{{ plan.speed }} Mbps</p>
                    <img :src="plan.image" :alt="plan.name" class="router-img">
                    <p>{{ plan.price }} / mes</p>
                    <button class="btn btn-warning" @click="selectPlan(plan)">Más info</button>
                </div>
            </div>
            <p class="lead animated fadeIn" data-aos="fade-up">*Aplica para Chancay - Preguntar disponibilidad</p>
        </div>

        <!-- Sección de Beneficios -->
        <div class="container mt-5 text-center" id="info">
            <div class="row text-center mb-4" data-aos="fade-up">
                <div class="col-md-12">
                    <h2 class="beneficios display-4 animated fadeIn fw-bold">
                        ¿CUÁLES SON LOS BENEFICIOS DE NUESTROS PLANES 100% FIBRA ÓPTICA?
                        🚀
                    </h2>
                </div>
            </div>
            <div class="row">
                <div v-for="info in info" :key="info.id" class="col-lg-4 col-12" data-aos="fade-down-left">
                    <div class="card benefit-card text-center animated fadeInUp">
                        <div class="card-body">
                            <i :class="info.icon" class="benefit-icon"></i>
                            <h5 class="card-title">{{ info.title }}</h5>
                            <p class="card-text">{{ info.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="contacto" class="mt-5">
            <ContactPage />
        </div>


    </div>

</template>


<script>
import ContactPage from '../views/ContactPage.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
    name: 'HomePage',
    components: {
        ContactPage
    },
    data() {
        return {
            benefits: [
                { id: 1, title: "Alta Velocidad", description: "Conexión sin interrupciones y descargas rápidas.", image: require("../assets/banner.png") },
                { id: 2, title: "Soporte 24/7", description: "Asistencia técnica disponible en todo momento.", image: require("../assets/fibra.webp") },
                { id: 3, title: "Instalación Rápida", description: "Te contactamos en menos de 48 horas.", image: require("../assets/soporte.webp") }
            ],
            plans: [
                { id: 1, name: "Plan Básico", speed: 200, price: "S/ 50", image: require("../assets/routerwifi.jpg"), link: "https://wa.link/ce4m72" },
                { id: 2, name: "Plan Avanzado", speed: 400, price: "S/ 60", image: require("../assets/premium.jpg"), link: "https://wa.link/50xpu4" },
                { id: 3, name: "Plan Premium", speed: 600, price: "S/ 90", image: require("../assets/gamer.webp"), link: "https://wa.link/zzahue" }
            ],
            info: [
                {
                    id: 1,
                    title: "Velocidad Simétrica",
                    description: "Descarga y sube archivos a la misma velocidad sin interrupciones.",
                    icon: "bi bi-speedometer2 fa-3x text-primary"
                },
                {
                    id: 2,
                    title: "Mayor Conectividad",
                    description: "Conecta más dispositivos sin perder rendimiento en tu red.",
                    icon: "bi bi-wifi fa-3x text-success"
                },
                {
                    id: 3,
                    title: "Mayor Estabilidad",
                    description: "Red 100% fibra óptica, sin interferencias ni pérdidas de señal.",
                    icon: "bi bi-hdd-network fa-3x text-warning"
                }
            ]

        };
    },
    mounted() {
        AOS.init({
            duration: 1000, // Duración de la animación en ms
            once: false, // Permite que la animación se active en ambos sentidos (subida y bajada)
            mirror: true // Hace que la animación también se reproduzca al volver a ver el elemento en el viewport
        })
    },
    methods: {
        scrollToPlans() {
            document.getElementById('plans').scrollIntoView({ behavior: 'smooth' });
        },
        selectPlan(plan) {
            window.open(plan.link, "_blank");
        }
    }
}
</script>

<style scoped>
#contacto {
    margin-bottom: 50px;
    /* Ajusta según la separación deseada */
}


.animated {
    animation: fadeIn 1s ease-in-out;
}

.highlight {
    color: #ffcc00;
}

.plan-box {
    background: #1D63FF;
    color: #fff;
    padding: 20px;
    border-radius: 12px;
    margin: 10px;
    margin-top: 60px;
    transition: transform 0.3s ease;
}

.plan-box p {
    font-size: 5vh;
}

.plan-box:hover {
    transform: scale(1.05);
}

.beneficios {
    font-size: 40px;
    color: #FFAB00;
}

.router-img {
    width: 100%;
    height: auto;
    /* Fija una altura para mantener uniformidad */
    object-fit: cover;
    /* Recorta la imagen para que se vea bien */
    border-radius: 8px;
    /* Bordes redondeados para mejor apariencia */
    margin-bottom: 10px;
}

.red-text {
    color: red;
}


.benefit-img {
    width: 100%;
    height: 60vh;
    /* Altura relativa al viewport */
    object-fit: cover;
}


.carousel-caption {
    background: rgba(0, 0, 0, 0.6);
    /* Fondo semitransparente */
    padding: 15px;
    border-radius: 10px;
    bottom: 20px;
    /* Asegura que se mantenga visible */
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    /* Ancho relativo */
    max-width: 800px;
    /* Ancho máximo */

}

@media (max-width: 1500px) {
    .benefit-img {
        height: 40vh;
        /* Reduce la altura en dispositivos móviles */
    }
}

@media (max-width: 1200px) {
    .benefit-img {
        height: 45vh;
        /* Reduce la altura en dispositivos móviles */
    }
}

@media (max-width: 1080px) {
    .benefit-img {
        height: 40vh;
        /* Reduce la altura en dispositivos móviles */
    }
}

@media (max-width: 1020px) {
    .benefit-img {
        height: 40vh;
        /* Reduce la altura en dispositivos móviles */
    }
}

/* Ajustes para pantallas más pequeñas */
@media (max-width: 768px) {
    .benefit-img {
        height: 25vh;
        /* Reduce la altura en dispositivos móviles */
    }

    .carousel-caption {
        bottom: 5px !important;
        padding: 8px;
        font-size: 0.9rem;
        width: 95%;
    }

    .carousel-caption h3 {
        font-size: 1.5rem;
        /* Reduce el tamaño de la fuente */
        height: 3vh;
    }

    .carousel-caption p {
        font-size: 1rem;
        /* Reduce el tamaño de la fuente */
    }
}

@media (max-width: 480px) {
    .benefit-img {
        height: 30vh;
        /* Reduce aún más la altura en pantallas muy pequeñas */
    }

    .carousel-caption {
        bottom: 5px;
        /* Ajusta la posición del texto */
        padding: 8px;
    }

    .carousel-caption h3 {
        font-size: 1.2rem;
        /* Reduce el tamaño de la fuente */
    }

    .carousel-caption p {
        font-size: 0.9rem;
        /* Reduce el tamaño de la fuente */
    }
}

@media (max-width: 400px) {
    .benefit-img {
        height: 20vh;
        /* Reduce aún más la altura en pantallas muy pequeñas */
    }

    .carousel-caption {
        bottom: 2px;
        /* Ajusta la posición del texto */
        padding: 5px;
    }

    .carousel-caption h3 {
        font-size: 0.9rem;
        /* Reduce el tamaño de la fuente */
    }

    .carousel-caption p {
        font-size: 0.6rem;
        /* Reduce el tamaño de la fuente */
    }
}

.home-page {
    overflow: hidden;
    /* Evita el desplazamiento horizontal */
    position: relative;
}

.benefits {
    margin-top: 50px;
}

.benefit-box {
    background: #fffff0;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.benefit-box:hover {
    transform: scale(1.05);
}

.beneficios {
    font-size: 2.5rem;
    color: #FFAB00;
    text-transform: uppercase;
}

.benefit-card {
    background: #fffff0;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s;
    transform-origin: center;
    /* Asegura que la transformación se haga desde el centro */
    will-change: transform;
    /* Optimiza la animación */
    margin: 25px;
}

.benefit-card:hover {
    transform: scale(1.08);
}



.benefit-icon {
    font-size: 50px;
    color: #fff;
    margin-bottom: 15px;
    animation: bounce 1.5s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.card-title {
    font-weight: bold;
    font-size: 1.5rem;
}

.card-text {
    font-size: 1.2rem;
}


@keyframes moveText {
    0% {
        transform: translateX(-100%);
        opacity: 0;
        color: #00ff00;
    }

    /* Rojo - Fuera de pantalla */
    30% {
        transform: translateX(0);
        opacity: 1;
        color: #ffffff;
    }

    /* Verde - Llega al centro */
    70% {
        transform: translateX(0);
        opacity: 1;
        color: #c9b8b8e9;
    }

    /* Azul - Se queda en el centro */
    100% {
        transform: translateX(100%);
        opacity: 0;
        color: #ff00ff;
    }

    /* Magenta - Sale por la derecha */
}

@keyframes typing {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}


.moving-text {

    display: inline-block;
    white-space: nowrap;
    margin: 0;
    animation: moveText 10s ease-in-out infinite;
    font-size: 2.4vw;
    /* Tamaño de fuente relativo al ancho de la pantalla */
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.decorative-banner {
    position: relative;
    display: inline-block;
    background: url('https://www.transparenttextures.com/patterns/canvas.png'), linear-gradient(135deg, #ff7f00, #d60000);
    padding: 10px 50px;
    border-radius: 10px;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    animation: glowing 2s infinite alternate;
    margin-top: 20px;
    max-width: 90vw;
    /* Evita que el banner se extienda demasiado */
    padding: 2vh 5vw;
    /* Espaciado adaptable */

}

/* Ajustes para pantallas más pequeñas */
@media (max-width: 1080px) {
    .welcome-title {
        font-size: 7vw;
        /* Aumenta el tamaño de fuente en dispositivos móviles */
    }

    .moving-text {
        font-size: 2.9vw;
        /* Aumenta el tamaño de fuente en dispositivos móviles */
    }

    .decorative-banner {
        padding: 8px 15px;
        /* Reduce el padding en dispositivos móviles */
        max-width: auto;
        width: auto;
    }
}

/* Ajustes para pantallas más pequeñas */
@media (max-width: 768px) {
    .welcome-title {
        font-size: 8vw;
        /* Aumenta el tamaño de fuente en dispositivos móviles */
    }

    .moving-text {
        font-size: 2.5vw;
        /* Aumenta el tamaño de fuente en dispositivos móviles */
    }

    .decorative-banner {
        padding: 8px 15px;
        /* Reduce el padding en dispositivos móviles */
        max-width: auto;
        width: auto;
    }
}

@media (max-width: 480px) {
    .welcome-title {
        font-size: 10vw;
        /* Aumenta aún más el tamaño de fuente en pantallas muy pequeñas */
    }

    .moving-text {
        font-size: 3.5vw;
        /* Aumenta aún más el tamaño de fuente en pantallas muy pequeñas */
    }

    .decorative-banner {
        height: 8vh;
        padding: 5px 10px;
        /* Reduce aún más el padding en pantallas muy pequeñas */
    }
}

/* Moño decorativo */
.ribbon {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
}

/* Efecto de brillo */
@keyframes glowing {
    0% {
        box-shadow: 0 0 10px rgba(255, 165, 0, 0.8);
    }

    100% {
        box-shadow: 0 0 20px rgba(255, 0, 0, 1);
    }
}

.welcome-title {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to right, #ffe100, #d60000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 20px;
}


</style>