<template>
    <div id="home" class="home-page">
        <!-- Hero Section -->
        <section class="hero-section text-center d-flex align-items-center justify-content-center">
            <div class="hero-content container">
                <h1 class="hero-title" data-aos="fade-down">
                    Internet <span class="highlight">Rápido</span> en <span class="highlight">Chancay</span> con Fibra Óptica 100% - NetSystems
                </h1>
                <p class="hero-subtitle" data-aos="fade-up">
                    Servicio de internet en Chancay con conexión confiable para tu hogar o negocio. ¡Instalación gratis
                    y soporte local!
                </p>
                <button class="btn btn-cta-hero" @click="scrollToPlans" data-aos="fade-up" data-aos-delay="200">
                    Ver Planes Ahora
                </button>
            </div>
        </section>

        <!-- Beneficios con Carrusel de Tarjetas -->
        <section class="benefits-section container py-5">
            <h2 class="section-title text-center" data-aos="fade-up">
                BENEFICIOS DE NETSYSTEMS <span class="highlight2">100% FIBRA ÓPTICA</span> EN <span class="highlight2">CHANCAY</span>
            </h2>
            <div id="benefitsCarousel" class="carousel slide" data-bs-ride="carousel" data-aos="fade-up">
                <div class="carousel-inner">
                    <div
                        v-for="(benefit, index) in benefits"
                        :key="benefit.id"
                        class="carousel-item"
                        :class="{ active: index === 0 }"
                        data-bs-interval="3000"
                    >
                        <div class="benefit-card">
                            <img
                                :src="benefit.image"
                                class="benefit-img"
                                :alt="benefit.title + ' - servicio de internet en Chancay'"
                                :title="benefit.title + ' en Chancay'"
                                @error="handleImageError($event, benefit.id)"
                            >
                            <h3 class="benefit-title">{{ benefit.title }}</h3>
                            <p class="benefit-text">{{ benefit.description }}</p>
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
                <div class="carousel-indicators">
                    <button
                        v-for="(benefit, index) in benefits"
                        :key="benefit.id"
                        type="button"
                        :data-bs-target="'#benefitsCarousel'"
                        :data-bs-slide-to="index"
                        :class="{ active: index === 0 }"
                        :aria-label="'Diapositiva ' + (index + 1)"
                    ></button>
                </div>
            </div>
        </section>

        <!-- Planes -->
        <section class="plans-section container py-5" id="plans">
            <h2 class="section-title text-center" data-aos="fade-up">
                PLANES DE INTERNET WIFI NETSYSTEMS<br> <span class="highlight2">INSTALACIÓN GRATIS</span>
            </h2>
            <p class="section-subtitle text-center" data-aos="fade-up" data-aos-delay="100">
                Elige el plan ideal para tu hogar o negocio en Chancay. Cobertura total, desde el centro hasta zonas
                rurales.
            </p>
            <div class="row g-4">
                <div v-for="plan in plans" :key="plan.id" class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                    <div class="plan-card">
                        <h3 class="plan-title">{{ plan.name }}</h3>
                        <p class="plan-speed">{{ plan.speed }} Mbps</p>
                        <img
                            :src="plan.image"
                            :alt="plan.name + ' - internet en Chancay'"
                            :title="plan.name + ' en Chancay'"
                            class="plan-img"
                            @error="handleImageError($event, plan.id)"
                        >
                        <p class="plan-price">{{ plan.price }} / mes</p>
                        <button class="btn btn-cta-plan" @click="selectPlan(plan)">¡Contrata Ahora!</button>
                    </div>
                </div>
            </div>
            <p class="text-center availability mt-3" data-aos="fade-up">
                *Verifica disponibilidad de internet en tu zona de Chancay
            </p>
        </section>

        <!-- Info Extra -->
        <section class="info-section container py-5" id="info">
            <h2 class="section-title text-center" data-aos="fade-up">
                ¿POR QUÉ ELEGIR NUESTRO SERVICIO DE INTERNET EN CHANCAY? 🚀
            </h2>
            <div class="row g-4">
                <div v-for="info in info" :key="info.id" class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                    <div class="info-card text-center">
                        <i :class="info.icon" class="info-icon"></i>
                        <h5 class="info-title">{{ info.title }}</h5>
                        <p class="info-text">{{ info.description }}</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Contacto 
        <section class="contact-section container py-5" id="contacto">
            <ContactPage />
        </section>-->

        <!-- Texto SEO Mejorado -->
        <section class="seo-text container py-4" data-aos="fade-up">
            <h2 class="seo-title">Internet de Fibra Óptica en Chancay con NetSystems</h2>
            <p class="seo-intro">
                Descubre el mejor <strong>servicio de internet en Chancay</strong> con NetSystems, líder en tecnología de
                <strong>fibra óptica</strong>. Ofrecemos conexión rápida y confiable para hogares, negocios y gamers en
                toda la región.
            </p>
            <h3 class="seo-subtitle">Ventajas de Nuestro Servicio</h3>
            <ul class="seo-list">
                <li><strong>Velocidad ultrarrápida</strong>: Hasta 600 Mbps para streaming y gaming sin interrupciones.</li>
                <li><strong>Cobertura total en Chancay</strong>: Desde el centro hasta zonas rurales, sin cortes.</li>
                <li><strong>Instalación gratis</strong>: Sin costos adicionales al contratar cualquier plan.</li>
                <li><strong>Soporte local 24/7</strong>: Asistencia técnica personalizada en Chancay.</li>
            </ul>
            <h3 class="seo-subtitle">¿Por Qué Elegirnos?</h3>
            <p class="seo-text-content">
                En NetSystems, nos comprometemos a brindar el mejor <strong>wifi en Chancay</strong> con tecnología de
                punta y un equipo local dedicado. Nuestra red de <strong>fibra óptica en Chancay</strong> asegura
                estabilidad y conectividad para todos tus dispositivos. ¡Contáctanos hoy y mejora tu experiencia de
                internet!
            </p>
            <a href="#plans" class="btn btn-seo-cta">Contacta Ahora</a>
        </section>
    </div>
</template>

<script>
//import ContactPage from '../views/ContactPage.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'HomePage',
    //components: { ContactPage },
    data() {
        return {
            benefits: [
                { id: 1, title: "Velocidad Ultra Rápida", description: "Hasta 600 Mbps simétricos para streaming, gaming y trabajo en Chancay.", image: require("../assets/banner.png") },
                { id: 2, title: "Cobertura Total en Chancay", description: "Conexión estable en todos los barrios, desde el centro hasta zonas rurales.", image: require("../assets/fibra.webp") },
                { id: 3, title: "Soporte Local 24/7", description: "Asistencia técnica en Chancay, disponible en cualquier momento.", image: require("../assets/soporte.webp") }
            ],
            plans: [
                { id: 1, name: "INTERNET 100% FIBRA", speed: 200, price: "S/ 50", image: require("../assets/routerwifi.jpg"), link: "https://wa.link/ce4m72" },
                { id: 2, name: "INTERNET 100% FIBRA", speed: 400, price: "S/ 60", image: require("../assets/premium.jpg"), link: "https://wa.link/50xpu4" },
                { id: 3, name: "INTERNET 100% FIBRA", speed: 600, price: "S/ 90", image: require("../assets/gamer.webp"), link: "https://wa.link/zzahue" }
            ],
            info: [
                { id: 1, title: "Velocidad Simétrica", description: "Descarga y sube archivos a la misma velocidad sin interrupciones en Chancay.", icon: "bi bi-speedometer2 fa-3x text-primary" },
                { id: 2, title: "Mayor Conectividad", description: "Conecta más dispositivos sin perder rendimiento en tu wifi en Chancay.", icon: "bi bi-wifi fa-3x text-success" },
                { id: 3, title: "Mayor Estabilidad", description: "Red 100% fibra óptica, sin interferencias ni pérdidas de señal.", icon: "bi bi-hdd-network fa-3x text-warning" }
            ]
        };
    },
    mounted() {
        AOS.init({
            duration: 600,
            once: true,
            mirror: false
        });
    },
    methods: {
        scrollToPlans() {
            document.getElementById('plans').scrollIntoView({ behavior: 'smooth' });
        },
        selectPlan(plan) {
            window.open(plan.link, "_blank");
        },
        handleImageError(event, id) {
            event.target.src = `https://via.placeholder.com/300x300?text=Imagen+No+Disponible+${id}`;
        }
    }
};
</script>

<style scoped>
/* Importar fuente Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* Globales: limpio, moderno, mobile-first */
.home-page {
    background-color: #ffffff;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Clase para resaltar palabras */
.highlight {
    color: #ffcc00;
    font-weight: 700;
}
.highlight2 {
    color: #ff0000;
    font-weight: 700;
}

/* Hero Section */
.hero-section {
    background: linear-gradient(rgba(255, 102, 102, 0.75), rgba(0, 0, 0, 0.75)),
        url('../assets/hero-bg.jpg') no-repeat center/cover;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.hero-content {
    max-width: 800px;
    padding: 2rem;
}

.hero-title {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.4rem;
    font-weight: 500;
    opacity: 0.9;
    margin-bottom: 2rem;
}

.btn-cta-hero {
    background-color: #ffcc00;
    color: #000;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 0.85rem 2.2rem;
    border-radius: 10px;
    border: none;
    transition: all 0.3s ease;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.btn-cta-hero:hover {
    background-color: #e6b800;
    transform: translateY(-3px);
}

/* Secciones Generales */
.section-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #1D63FF;
    margin-bottom: 1.5rem;
}

.section-subtitle {
    font-size: 1.15rem;
    font-weight: 400;
    color: #6c757d;
    margin-bottom: 2rem;
}

/* Beneficios Carousel */
.benefits-section .carousel {
    max-width: 700px;
    margin: 0 auto;
    position: relative;
}

.benefits-section .carousel-inner {
    overflow: hidden;
}

.benefits-section .carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 550px;
    transition: transform 0.6s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.benefits-section .carousel-item.active {
    position: relative;
    z-index: 1;
}

.benefits-section .benefit-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 3rem;
    text-align: center;
    max-width: 500px;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.benefits-section .benefit-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.benefits-section .benefit-img {
    width: 400px;
    height: 400px;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 1.5rem;
}

.benefits-section .benefit-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.75rem;
    line-height: 1.4;
}

.benefits-section .benefit-text {
    font-size: 1.2rem;
    font-weight: 400;
    color: #555;
    line-height: 1.5;
}

.benefits-section .carousel-control-prev,
.benefits-section .carousel-control-next {
    width: 70px;
    height: 70px;
    background: rgba(29, 99, 255, 0.7);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    transition: background 0.3s ease;
    z-index: 2;
}

.benefits-section .carousel-control-prev:hover,
.benefits-section .carousel-control-next:hover {
    background: #1D63FF;
}

.benefits-section .carousel-control-prev-icon,
.benefits-section .carousel-control-next-icon {
    background-size: 100%, 100%;
}

.benefits-section .carousel-indicators {
    bottom: -60px;
    z-index: 2;
}

.benefits-section .carousel-indicators button {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #ccc;
    border: none;
    margin: 0 6px;
}

.benefits-section .carousel-indicators .active {
    background-color: #ffcc00;
}

/* Responsive */
@media (max-width: 992px) {
    .benefits-section .carousel {
        max-width: 650px;
    }

    .benefits-section .carousel-item {
        height: 520px;
    }

    .benefits-section .benefit-card {
        max-width: 480px;
        height: 480px;
    }

    .benefits-section .benefit-img {
        width: 380px;
        height: 380px;
    }

    .benefits-section .benefit-title {
        font-size: 1.6rem;
    }

    .benefits-section .benefit-text {
        font-size: 1.1rem;
    }
}

@media (max-width: 768px) {
    .benefits-section .carousel {
        max-width: 550px;
    }

    .benefits-section .carousel-item {
        height: 480px;
    }

    .benefits-section .benefit-card {
        max-width: 460px;
        height: 460px;
    }

    .benefits-section .benefit-img {
        width: 360px;
        height: 360px;
    }

    .benefits-section .benefit-title {
        font-size: 1.5rem;
    }

    .benefits-section .benefit-text {
        font-size: 1rem;
    }
}

@media (max-width: 576px) {
    .benefits-section .carousel {
        max-width: 450px;
    }

    .benefits-section .carousel-item {
        height: 440px;
    }

    .benefits-section .benefit-card {
        max-width: 420px;
        height: 420px;
    }

    .benefits-section .benefit-img {
        width: 340px;
        height: 340px;
    }

    .benefits-section .benefit-title {
        font-size: 1.4rem;
    }

    .benefits-section .benefit-text {
        font-size: 0.95rem;
    }

    .benefits-section .carousel-control-prev,
    .benefits-section .carousel-control-next {
        width: 60px;
        height: 60px;
    }

    .benefits-section .carousel-indicators button {
        width: 14px;
        height: 14px;
    }
}

@media (max-width: 400px) {
    .benefits-section .carousel {
        max-width: 380px;
    }

    .benefits-section .carousel-item {
        height: 400px;
    }

    .benefits-section .benefit-card {
        max-width: 360px;
        height: 360px;
    }

    .benefits-section .benefit-img {
        width: 300px;
        height: 300px;
    }

    .benefits-section .benefit-title {
        font-size: 1.3rem;
    }

    .benefits-section .benefit-text {
        font-size: 0.9rem;
    }
}

/* Planes */
.plans-section .plan-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.plans-section .plan-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.plan-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #333;
}

.plan-speed {
    font-size: 2rem;
    font-weight: 700;
    color: #1D63FF;
    margin: 0.5rem 0;
}

.plan-img {
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    border-radius: 8px;
    margin: 1rem 0;
}

.plan-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #dc3545;
    margin-bottom: 1.5rem;
}

.btn-cta-plan {
    background-color: #ffcc00;
    color: #1D63FF;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    width: 100%;
    padding: 0.8rem;
    border-radius: 8px;
    border: none;
    transition: all 0.3s ease;
}

.btn-cta-plan:hover {
    background-color: #e6b800;
    transform: translateY(-3px);
}

.availability {
    font-size: 0.95rem;
    color: #6c757d;
}

/* Info Section */
.info-section .info-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    text-align: center;
}

.info-icon {
    font-size: 2.5rem;
    color: #1D63FF;
    margin-bottom: 1rem;
}

.info-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
}

.info-text {
    font-size: 1rem;
    font-weight: 400;
    color: #555;
}

/* Contact Section */
.contact-section {
    background: #f8f9fa;
    padding: 3rem 0;
}

/* Texto SEO */
.seo-text {
    font-size: 1.1rem;
    color: #555;
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 2rem;
}

.seo-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1D63FF;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.seo-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

.seo-intro,
.seo-text-content {
    font-size: 1.1rem;
    font-weight: 400;
    color: #555;
    margin-bottom: 1rem;
}

.seo-list {
    list-style-type: disc;
    padding-left: 2rem;
    margin-bottom: 1.5rem;
}

.seo-list li {
    font-size: 1.1rem;
    font-weight: 400;
    color: #555;
    margin-bottom: 0.75rem;
}

.seo-list li strong {
    color: #1D63FF;
}

.btn-seo-cta {
    background-color: #ffcc00;
    color: #1D63FF;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    border: none;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.btn-seo-cta:hover {
    background-color: #e6b800;
    transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 992px) {
    .hero-section {
        min-height: 60vh;
    }

    .hero-title {
        font-size: 2.4rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .benefits-section .carousel {
        max-width: 550px;
    }

    .benefits-section .carousel-item {
        height: 420px;
    }

    .benefits-section .benefit-card {
        max-width: 380px;
        height: 380px;
    }

    .benefits-section .benefit-img {
        width: 280px;
        height: 280px;
    }

    .plan-img {
        max-height: 150px;
    }

    .seo-title {
        font-size: 1.8rem;
    }

    .seo-subtitle {
        font-size: 1.3rem;
    }

    .seo-intro,
    .seo-text-content,
    .seo-list li {
        font-size: 1rem;
    }

    .btn-seo-cta {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
    }
}

@media (max-width: 768px) {
    .benefits-section .carousel {
        max-width: 500px;
    }

    .benefits-section .carousel-item {
        height: 400px;
    }

    .benefits-section .benefit-card {
        max-width: 360px;
        height: 360px;
    }

    .benefits-section .benefit-img {
        width: 260px;
        height: 260px;
    }

    .benefits-section .benefit-title {
        font-size: 1.4rem;
    }

    .benefits-section .benefit-text {
        font-size: 1rem;
    }
}

@media (max-width: 576px) {
    .hero-section {
        min-height: 50vh;
        padding: 1rem;
    }

    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .btn-cta-hero,
    .btn-cta-plan {
        font-size: 1rem;
        padding: 0.6rem 1.5rem;
    }

    .section-title {
        font-size: 1.6rem;
    }

    .plan-speed {
        font-size: 1.5rem;
    }

    .plan-price {
        font-size: 1.25rem;
    }

    .benefits-section .carousel {
        max-width: 400px;
    }

    .benefits-section .carousel-item {
        height: 380px;
    }

    .benefits-section .benefit-card {
        max-width: 340px;
        height: 340px;
    }

    .benefits-section .benefit-img {
        width: 240px;
        height: 240px;
    }

    .benefits-section .benefit-title {
        font-size: 1.3rem;
    }

    .benefits-section .benefit-text {
        font-size: 0.9rem;
    }

    .benefits-section .carousel-control-prev,
    .benefits-section .carousel-control-next {
        width: 50px;
        height: 50px;
    }

    .benefits-section .carousel-indicators button {
        width: 12px;
        height: 12px;
    }

    .seo-title {
        font-size: 1.5rem;
    }

    .seo-subtitle {
        font-size: 1.1rem;
    }

    .seo-intro,
    .seo-text-content,
    .seo-list li {
        font-size: 0.95rem;
    }

    .btn-seo-cta {
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
    }
}

@media (max-width: 400px) {
    .benefits-section .carousel {
        max-width: 350px;
    }

    .benefits-section .carousel-item {
        height: 360px;
    }

    .benefits-section .benefit-card {
        max-width: 320px;
        height: 320px;
    }

    .benefits-section .benefit-img {
        width: 220px;
        height: 220px;
    }

    .benefits-section .benefit-title {
        font-size: 1.2rem;
    }

    .benefits-section .benefit-text {
        font-size: 0.85rem;
    }
}
</style>