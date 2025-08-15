<template>
    <div id="conocenos" class="conocenos-page container mt-5">
        <!-- Sección de presentación con animación -->
        <div class="row text-center mb-5">
            <div class="col-md-12">
                <h1 class="display-3 animated fadeInDown welcome-title">
                    Descubre Más Sobre Nosotros
                </h1>
                <div class="decorative-banner">
                    <p class="lead moving-text">Innovación y calidad en cada servicio.</p>
                </div>
            </div>
        </div>

        <!-- Carrusel de imágenes de la empresa -->
        <div id="companyCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div v-for="(image, index) in companyImages" :key="image.id" class="carousel-item"
                    :class="{ active: index === 0 }" data-bs-interval="3000">
                    <img :src="image.src" class="d-block w-100 carousel-img" :alt="image.alt">
                    <div class="carousel-caption d-block">
                        <h3>{{ image.title }}</h3>
                        <p>{{ image.description }}</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#companyCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#companyCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>

        <!-- Sección de información de la empresa -->
        <div class="row mt-5 text-center">
            <div class="col-md-12">
                <!-- Título -->
                <h2 class="display-4 animated fadeIn fw-bold text-uppercase text-secundary" data-aos="fade-up">
                    Sobre NETSYSTEMS en Perú
                </h2>
                <hr class="w-50 animated fadeIn mx-auto border-primary mb-4" data-aos="fade-up">

                <!-- Introducción -->
                <p class="lead animated fadeIn" data-aos="fade-up">
                    Somos una empresa especializada en <strong>Redes, Telecomunicaciones e Informática</strong>, con un
                    equipo de profesionales altamente capacitados en:
                </p>

                <!-- Lista de Servicios en Cartas -->
                <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center" data-aos="fade-up">
                    <div class="col">
                        <div class="card h-100 border-0 shadow-lg animated fadeIn" data-aos="fade-up">
                            <div class="card-body text-center">
                                <i class="fas fa-network-wired text-success fa-3x mb-3"></i>
                                <h5 class="card-title fw-bold">Instalaciones de HFC y FTTH</h5>
                                <p class="card-text">Brindamos instalación de redes de telecomunicaciones de alta
                                    velocidad.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0 shadow-lg animated fadeIn" data-aos="fade-up">
                            <div class="card-body text-center">
                                <i class="fas fa-box text-primary fa-3x mb-3"></i>
                                <h5 class="card-title fw-bold">Colocación de cajas NAT</h5>
                                <p class="card-text">Instalamos cajas de distribución para optimizar el tendido de red.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0 shadow-lg animated fadeIn" data-aos="fade-up">
                            <div class="card-body text-center">
                                <i class="fas fa-lightbulb text-danger fa-3x mb-3"></i>
                                <h5 class="card-title fw-bold">Empalmes de fibra óptica</h5>
                                <p class="card-text">Realizamos empalmes precisos para garantizar la continuidad de la
                                    señal.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0 shadow-lg animated fadeIn" data-aos="fade-up">
                            <div class="card-body text-center">
                                <i class="fas fa-project-diagram text-warning fa-3x mb-3"></i>
                                <h5 class="card-title fw-bold">Ampliaciones y mantenimiento de redes</h5>
                                <p class="card-text">Optimizamos redes existentes para mejorar su rendimiento y
                                    cobertura.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0 shadow-lg animated fadeIn" data-aos="fade-up">
                            <div class="card-body text-center">
                                <i class="fas fa-video text-info fa-3x mb-3"></i>
                                <h5 class="card-title fw-bold">Sistemas de seguridad por cámaras</h5>
                                <p class="card-text">Instalamos sistemas de vigilancia para protección en tiempo real.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Compromiso -->
                <p class="lead animated fadeIn mt-5" data-aos="fade-up">
                    En NetSystems nuestro compromiso es brindar <strong>soluciones tecnológicas confiables y de alta calidad en todo Chancay - Perú</strong>,
                    garantizando la seguridad y eficiencia en cada proyecto.
                    Trabajamos con <strong>cableado estructurado</strong> (UTP, coaxial y fibra óptica), adaptándonos a
                    las necesidades específicas de nuestros clientes del país con
                    <strong>enlaces aéreos o cableados</strong>.
                </p>

                <!-- Cierre y Contacto -->
                <p class="lead animated fadeIn fw-bold mt-4" data-aos="fade-up">
                    <i class="bi bi-telephone-fill text-danger me-2"></i> <a class="contacto"
                        href="https://wa.link/09xsth" target="_blank"><strong>Contáctanos</strong></a> y descubre cómo
                    podemos ayudarte.
                </p>

            </div>
        </div>


        <!-- Nueva estructura de la sección de información -->
        <div class="row mt-5 text-center company-info" data-aos="flip-up">
            <div class="col-md-3">
                <div class="info-box animated fadeInLeft">
                    <i class="fas fa-broadcast-tower icon"></i>
                    <h3>Misión</h3>
                    <p>Conectar a personas y empresas Peruanas con soluciones innovadoras en redes y telecomunicaciones,
                        garantizando calidad y seguridad en cada servicio.</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="info-box animated fadeIn" data-aos="flip-up">
                    <i class="fas fa-eye icon"></i>
                    <h3>Visión</h3>
                    <p>Ser NetSystems el líder en telecomunicaciones en la región, ofreciendo tecnología de vanguardia y un
                        servicio excepcional a nuestros clientes.</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="info-box animated fadeInRight" data-aos="flip-up">
                    <i class="fas fa-handshake icon"></i>
                    <h3>Valores</h3>
                    <p>Compromiso, innovación y excelencia son nuestros pilares para construir relaciones de confianza
                        con nuestros clientes.</p>
                </div>
            </div>
        </div>


        <!-- Sección de clientes destacados con slider -->
        <div class="row mt-5 text-center">
            <div class="col-md-12">
                <h2 class="display-4 animated fadeIn fw-bold clientes-tittle" data-aos="fade-up">
                    Algunos de nuestros clientes
                </h2>
                <div id="clientsCarousel" class="carousel slide" data-bs-ride="carousel" data-aos="fade-up">
                    <div class="carousel-inner">
                        <div v-for="(chunk, index) in chunkedClients" :key="index" class="carousel-item"
                            :class="{ active: index === 0 }" data-bs-interval="3000">
                            <div class="row justify-content-center">
                                <div v-for="client in chunk" :key="client.id"
                                    class="col-lg-3 col-md-4 col-6 text-center">
                                    <img :src="client.logo" :alt="client.name" class="img-fluid client-logo">
                                </div>

                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#clientsCarousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Anterior</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#clientsCarousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
    name: 'ConocenosPage',
    data() {
        return {
            companyImages: [
                { id: 1, src: require("../assets/equipo.jpg"), alt: "Imagen 1", title: "Nuestro Equipo", description: "Profesionales altamente capacitados." },
                { id: 2, src: require("../assets/instalaciones.webp"), alt: "Imagen 2", title: "Instalaciones", description: "Tecnología de última generación." },
                { id: 3, src: require("../assets/proyectos.jpg"), alt: "Imagen 3", title: "Proyectos", description: "Soluciones a medida para cada cliente." }
            ],
            clients: [
                { id: 1, name: "Cliente 1", logo: require("../assets/belltech.png") },
                { id: 2, name: "Cliente 2", logo: require("../assets/mirador.jpg") },
                { id: 3, name: "Cliente 3", logo: require("../assets/markham.png") },
                { id: 4, name: "Cliente 4", logo: require("../assets/universidadmusica.jpg") },
                { id: 5, name: "Cliente 5", logo: require("../assets/hp.jpg") },
                { id: 6, name: "Cliente 6", logo: require("../assets/compucare.png") }
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
    computed: {
        // Divide los clientes en grupos de 4 para el carrusel
        chunkedClients() {
            const chunkSize = 3;
            return this.clients.reduce((resultArray, item, index) => {
                const chunkIndex = Math.floor(index / chunkSize);
                if (!resultArray[chunkIndex]) {
                    resultArray[chunkIndex] = []; // Inicia un nuevo chunk
                }
                resultArray[chunkIndex].push(item);
                return resultArray;
            }, []);
        }
    }
}
</script>

<style scoped>
/* Importar fuente Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.conocenos-page {
    overflow: hidden;
    position: relative;
}

.highlight {
    color: #ffcc00;
    font-weight: 700;
}

.animated {
    animation: fadeIn 1s ease-in-out;
}

.welcome-title {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to right, #ffe100, #d60000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 20px;
    line-height: 1.2;
    font-size: 3rem;
}

.hero-title {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.decorative-banner {
    position: relative;
    display: inline-block;
    background: linear-gradient(135deg, #ff7f00, #d60000);
    padding: 10px 50px;
    border-radius: 10px;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    animation: glowing 2s infinite alternate;
    margin-top: 20px;
}

@keyframes glowing {
    0% { box-shadow: 0 0 10px rgba(255, 165, 0, 0.8); }
    100% { box-shadow: 0 0 20px rgba(255, 0, 0, 1); }
}

.moving-text {
    font-size: 3.2vw;
    display: inline-block;
    white-space: nowrap;
    margin: 0;
    animation: moveText 10s ease-in-out infinite;
}

@keyframes moveText {
    0% { transform: translateX(-100%); opacity: 0; color: #00ff00; }
    30% { transform: translateX(0); opacity: 1; color: #ffffff; }
    70% { transform: translateX(0); opacity: 1; color: #c9b8b8e9; }
    100% { transform: translateX(100%); opacity: 0; color: #ff00ff; }
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.carousel-img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
}

.carousel-caption {
    background: rgba(0, 0, 0, 0.6);
    padding: 15px;
    border-radius: 10px;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 800px;
    color: white;
}

.carousel-caption h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.carousel-caption p {
    font-size: 1.1rem;
    font-weight: 400;
}

.carousel-control-prev,
.carousel-control-next {
    width: 50px;
    height: 50px;
    background-color: rgba(29, 99, 255, 0.7);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.8;
    transition: opacity 0.3s ease, background-color 0.3s ease;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
    opacity: 1;
    background-color: #1D63FF;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    filter: invert(1);
}

/* Información de la empresa */
.display-4 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1D63FF;
    margin-bottom: 1.5rem;
}

.lead {
    font-size: 1.25rem;
    color: #555;
    margin-bottom: 1.5rem;
}

.service-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.card-title {
    font-size: 1.6rem;
    color: #333;
}

.card-text {
    font-size: 1.1rem;
    color: #6c757d;
}

.btn-cta-conocenos {
    background-color: #ffcc00;
    color: #1D63FF;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    border: none;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-cta-conocenos:hover {
    background-color: #e6b800;
    transform: translateY(-2px);
}

.company-info {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 20px;
}

.info-box {
    background: linear-gradient(135deg, #ff7f00, #d60000);
    color: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.info-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.info-box-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.clients-title {
    margin-top: 6vh;
    margin-bottom: 6vh;
    font-size: 2.5rem;
    color: #1D63FF;
}

#clientsCarousel {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.client-logo {
    width: 100%;
    height: 15vh;
    object-fit: contain;
    transition: transform 0.3s ease;
    margin: 1rem 0;
}

.client-logo:hover {
    transform: scale(1.1);
}

/* Responsive */
@media (max-width: 1500px) {
    .carousel-img { height: 40vh; }
}

@media (max-width: 1200px) {
    .carousel-img { height: 45vh; }
}

@media (max-width: 1080px) {
    .carousel-img { height: 40vh; }
    .welcome-title { font-size: 7vw; }
    .moving-text { font-size: 2.9vw; }
    .decorative-banner { padding: 8px 15px; width: auto; }
}

@media (max-width: 1020px) {
    .carousel-img { height: 40vh; }
}

@media (max-width: 768px) {
    .carousel-img { height: 50vh; }
    .carousel-caption { bottom: 5px; padding: 8px; font-size: 0.9rem; width: 95%; }
    .carousel-caption h3 { font-size: 1.5rem; }
    .carousel-caption p { font-size: 1rem; }
    .welcome-title { font-size: 8vw; }
    .moving-text { font-size: 3.6vw; }
    .decorative-banner { padding: 8px 15px; width: auto; }
    .company-info { flex-direction: column; }
    .display-4 { font-size: 2rem; }
    .lead { font-size: 1.15rem; }
    .card-title { font-size: 1.4rem; }
    .card-text { font-size: 1rem; }
    .clients-title { font-size: 2rem; }
    .client-logo { height: 12vh; }
}

@media (max-width: 480px) {
    .carousel-img { height: 30vh; }
    .carousel-caption { bottom: 5px; padding: 8px; }
    .carousel-caption h3 { font-size: 1.2rem; }
    .carousel-caption p { font-size: 0.9rem; }
    .welcome-title { font-size: 10vw; }
    .moving-text { font-size: 3.5vw; }
    .decorative-banner { padding: 5px 10px; height: 8vh; }
    .display-4 { font-size: 1.75rem; }
    .lead { font-size: 1.1rem; }
    .card-title { font-size: 1.3rem; }
    .card-text { font-size: 0.95rem; }
    .clients-title { font-size: 1.8rem; }
    .client-logo { height: 10vh; }
    .btn-cta-conocenos { font-size: 1rem; padding: 0.6rem 1.2rem; }
}

@media (max-width: 400px) {
    .carousel-img { height: 40vh; }
    .carousel-caption { bottom: 2px; padding: 5px; }
    .carousel-caption h3 { font-size: 0.9rem; }
    .carousel-caption p { font-size: 0.6rem; }
    .client-logo { height: 8vh; }
}
</style>