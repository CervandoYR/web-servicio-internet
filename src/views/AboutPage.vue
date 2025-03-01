
<template>
    
    <div class="about-page container mt-5">
        <!-- Título y Descripción Principal -->
        <div class="row text-center mb-5">
            <div class="col-md-12">
                <h1 class="display-4 animated fadeIn">Numero, correo, etc</h1>
                
            </div>
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
