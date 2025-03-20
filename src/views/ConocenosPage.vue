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
                    Nuestra Empresa
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
                    Nuestro compromiso es brindar <strong>soluciones tecnológicas confiables y de alta calidad</strong>,
                    garantizando la seguridad y eficiencia en cada proyecto.
                    Trabajamos con <strong>cableado estructurado</strong> (UTP, coaxial y fibra óptica), adaptándonos a
                    las necesidades específicas de nuestros clientes con
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
                    <p>Conectar a personas y empresas con soluciones innovadoras en redes y telecomunicaciones,
                        garantizando calidad y seguridad en cada servicio.</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="info-box animated fadeIn" data-aos="flip-up">
                    <i class="fas fa-eye icon"></i>
                    <h3>Visión</h3>
                    <p>Ser la empresa líder en telecomunicaciones en la región, ofreciendo tecnología de vanguardia y un
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
.contacto {
    text-decoration: none;
    /* Quita el subrayado */
    color: red;
    /* Cambia el color del texto a rojo */
    font-weight: bold;
    /* Opcional: Hace el texto más grueso */
}

.contacto:hover {
    color: darkred;
    /* Opcional: Cambia el color cuando pasas el cursor */
}


.clientes-tittle {
    margin-top: 6vh;
    margin-bottom: 6vh;
}

.company-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.info-box {
    background: linear-gradient(135deg, #ff7f00, #ff7272);
    color: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.icon {
    font-size: 40px;
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    .company-info {
        flex-direction: column;
    }
}


.conocenos-page {
    overflow: hidden;
    position: relative;
}

.animated {
    animation: fadeIn 1s ease-in-out;
}

.carousel-img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
}


/* Estilos para el carrusel de clientes */
#clientsCarousel {
    background-color: #f8f9fa;
    /* Fondo claro para resaltar los logos */
    padding: 20px;
    margin-top: 6vh;
    margin-bottom: 6vh;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    /* Sombra suave */
}

/* Estilos para los botones de navegación */
.carousel-control-prev,
.carousel-control-next {
    width: 40px;
    height: 40px;
    background-color: rgba(181, 181, 181, 0.7);
    /* Fondo oscuro para los botones */
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.8;
    transition: opacity 0.3s ease, background-color 0.3s ease;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
    opacity: 0.5;
    background-color: rgba(82, 82, 82, 0.9);
    /* Fondo más oscuro al hacer hover */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    filter: invert(1);
    /* Invertir el color de los íconos para que sean blancos */
}

/* Estilos para los logos de los clientes */
.client-logo {
    object-fit: contain; /* Mantiene la proporción del logo */
    transition: transform 0.3s ease-in-out; /* Agrega un efecto de zoom */
}

.client-logo:hover {
    transform: scale(1.2); /* Efecto de agrandamiento al pasar el mouse */
}


/* Ajustes responsivos para el carrusel de clientes */
@media (max-width: 768px) {
    .client-logo {
        max-height: 80px;
        /* Reducir el tamaño de los logos en dispositivos móviles */
    }

    .carousel-control-prev,
    .carousel-control-next {
        width: 30px;
        height: 30px;
        /* Botones más pequeños en móviles */
    }
}

@media (max-width: 480px) {
    .client-logo {
        max-height: 60px;
        /* Reducir aún más el tamaño de los logos en pantallas pequeñas */
    }

    #clientsCarousel {
        padding: 10px;
        /* Reducir el padding en pantallas pequeñas */
    }
}

.client-logo {
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
    height: 15vh;
    transition: transform 0.3s ease;
}

.client-logo:hover {
    transform: scale(1.1);
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
}

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

.moving-text {
    font-size: 48px;
    display: inline-block;
    white-space: nowrap;
    margin: 0;
    animation: moveText 10s ease-in-out infinite;
    font-size: 3.2vw;
}

@keyframes moveText {
    0% {
        transform: translateX(-100%);
        opacity: 0;
        color: #00ff00;
    }

    30% {
        transform: translateX(0);
        opacity: 1;
        color: #ffffff;
    }

    70% {
        transform: translateX(0);
        opacity: 1;
        color: #c9b8b8e9;
    }

    100% {
        transform: translateX(100%);
        opacity: 0;
        color: #ff00ff;
    }
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
    .carousel-img {
        height: 40vh;
        /* Reduce la altura en dispositivos móviles */
    }
}

@media (max-width: 1200px) {
    .carousel-img {
        height: 45vh;
        /* Reduce la altura en dispositivos móviles */
    }
}


@media (max-width: 1080px) {
    .carousel-img {
        height: 40vh;
        /* Reduce la altura en dispositivos móviles */
    }
}

@media (max-width: 1020px) {
    .carousel-img {
        height: 40vh;
        /* Reduce la altura en dispositivos móviles */
    }
}

/* Ajustes para pantallas más pequeñas */
@media (max-width: 768px) {
    .carousel-img {
        height: 50vh;
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
    .carousel-img {
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
    .carousel-img {
        height: 40vh;
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
        font-size: 3.6vw;
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
</style>