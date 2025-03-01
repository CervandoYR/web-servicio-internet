<template>
    <div class="about-page container mt-5">
        <!-- Título y Descripción Principal -->
        <div class="row text-center mb-5">
            <div class="col-md-12">
                <h1 class="display-4 animated fadeIn">Sobre Nosotros</h1>
                <p class="lead animated fadeIn">Conoce más sobre nuestra institución y nuestra misión.</p>
            </div>
        </div>

        <!-- Sección con imagen y texto (50/50) -->
        <div class="row align-items-center justify-content-center text-center mb-6">
            <div class="col-md-5">
                <h2 class="h3 mb-4">Nuestra Historia</h2>
                <p class="text-justify">
                    Fundada en el año 2004, nuestra institución ha experimentado un crecimiento continuo con el firme propósito de ofrecer una educación integral que impulse tanto el desarrollo académico como humano de nuestros estudiantes. A lo largo de los años, hemos consolidado un compromiso con la excelencia educativa, formando profesionales comprometidos con el bienestar social y el progreso de su entorno.
                </p>
            </div>
            <div class="col-md-5">
                <img src="./../assets/insignia.jpg" alt="Historia" class="img-fluid rounded shadow-lg">
            </div>
        </div>

        <!-- Sección de Valores -->
        <div class="row mb-6">
            <div class="col-md-12 text-center">
                <h2 class="mb-4">Nuestros Valores</h2>
                <div class="row justify-content-center">
                    <div class="col-md-4 mb-4">
                        <div class="value-box bg-primary text-white shadow">
                            <i class="fas fa-heart fa-3x mb-3"></i>
                            <h3>Compromiso</h3>
                            <p>Nos dedicamos a ofrecer una educación de calidad con un enfoque humano.</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="value-box bg-success text-white shadow">
                            <i class="fas fa-users fa-3x mb-3"></i>
                            <h3>Respeto</h3>
                            <p>Promovemos el respeto mutuo entre estudiantes, padres, y docentes.</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="value-box bg-warning text-white shadow">
                            <i class="fas fa-lightbulb fa-3x mb-3"></i>
                            <h3>Innovación</h3>
                            <p>Fomentamos el pensamiento crítico y la creatividad en cada estudiante.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sección de Equipo -->
        <div class="row mb-6">
            <div class="col-md-12 text-center">
                <h2 class="mb-4">Nuestro Equipo</h2>
                <p class="lead mb-5">Te invitamos a conocer al equipo de profesionales apasionados y comprometidos que hacen posible el éxito de nuestra institución.</p>
                <div class="row justify-content-center">
                    <div class="col-md-4 mb-4">
                        <div class="team-member shadow">
                            <img src="./../assets/directorAcademico.webp" alt="Miembro 1" class="img-fluid rounded-circle mb-3">
                            <h5>Juan Pérez</h5>
                            <p>Director Académico</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="team-member shadow">
                            <img src="./../assets/coordinadoraActividades.webp" alt="Miembro 2" class="img-fluid rounded-circle mb-3">
                            <h5>María Gómez</h5>
                            <p>Coordinadora de Actividades</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="team-member shadow">
                            <img src="./../assets/directorTecnologico.webp" alt="Miembro 3" class="img-fluid rounded-circle mb-3">
                            <h5>Carlos López</h5>
                            <p>Jefe de Tecnología</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-12 text-center">
                <h2 class="mb-4">Nuestras actividades</h2>
            </div>
        </div>
        <!-- Carrusel -->
        <div id="teamCarousel" class="carousel slide shadow-lg mb-6" data-bs-ride="carousel">
        <!-- Indicadores de miniaturas -->
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#teamCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Vista 1">
                <img src="./../assets/ColegioVISTA1.jpg" class="img-fluid rounded" alt="Vista 1">
            </button>
            <button type="button" data-bs-target="#teamCarousel" data-bs-slide-to="1" aria-label="Vista 2">
                <img src="./../assets/ColegioVISTA2.jpg" class="img-fluid rounded" alt="Vista 2">
            </button>
            <button type="button" data-bs-target="#teamCarousel" data-bs-slide-to="2" aria-label="Vista 3">
                <img src="./../assets/ColegioVISTA3.jpg" class="img-fluid rounded" alt="Vista 3">
            </button>
        </div>

        <!-- Contenido del carrusel -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="carousel-overlay"></div>
                <img src="./../assets/ColegioVISTA1.jpg" class="d-block w-100 rounded" alt="Vista 1">
                <div class="carousel-caption d-none d-md-block">
                    
                    <p>Un día especial en nuestra institución educativa.</p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-overlay"></div>
                <img src="./../assets/actividades.webp" class="d-block w-100 rounded" alt="Vista 2">
                <div class="carousel-caption d-none d-md-block">
                    
                    <p>Estudiantes participando en actividades extracurriculares.</p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-overlay"></div>
                <img src="./../assets/ColegioVISTA3.jpg" class="d-block w-100 rounded" alt="Vista 3">
                <div class="carousel-caption d-none d-md-block">
                    
                    <p>Celebración de logros académicos de nuestros estudiantes.</p>
                </div>
            </div>
        </div>

        <!-- Controles del carrusel -->
        <button class="carousel-control-prev" type="button" data-bs-target="#teamCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#teamCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>
    </div>
</template>

<style scoped>
/* Estilos ajustados */
.mb-6 {
    margin-bottom: 4rem !important;
}

.value-box {
    padding: 30px;
}

.team-member {
    padding: 30px;
}

.carousel-item img {
    height: 500px;
    width: 100%;
    object-fit: cover; /* Evita recortes y ajusta la imagen */
    border-radius: 15px;
    animation: fadeIn 1s ease-in-out; /* Animación al aparecer */
}


/* Indicadores de miniaturas */
.carousel-indicators img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border: 2px solid #fff;
    border-radius: 5px;
    transition: transform 0.3s;
}

.carousel-indicators img:hover {
    transform: scale(1.1); /* Efecto de zoom al pasar el mouse */
}

.carousel-indicators button {
    background: transparent;
    border: none;
    margin: 0 5px;
}

/* Estilo para los textos del carrusel */
.carousel-caption h5 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.carousel-caption p {
    font-size: 1.2rem;
    color: #f8f9fa;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}
</style>
