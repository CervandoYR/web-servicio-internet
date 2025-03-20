<template>
    <div class="about-page container mt-5">
        <!-- Sección de Contacto Mejorada -->
        <div class="row mt-6 contact-section">
            <div class="col-md-12 text-center">
                <h2 class="mb-4 animate-fade-in">Atención al Cliente 24/7</h2>
                <p class="lead animate-fade-in">¡Estamos aquí para ayudarte! Comunícate con nosotros a través de los siguientes medios.</p>
            </div>

            <!-- Información de contacto -->
            <div class="col-md-6 mb-4 text-center">
                <div class="contact-box shadow p-4 animate-slide-in">
                    <h4><i class="fas fa-phone-alt text-primary"></i> Teléfono</h4>
                    <p class="mb-2">+51 924 076 526</p>
                    
                    <h4><i class="fab fa-whatsapp text-success"></i> WhatsApp</h4>
                    <p><a href="https://wa.me/51924076526" target="_blank" class="contact-link">Enviar mensaje</a></p>

                    <h4><i class="fas fa-envelope text-danger"></i> Correo Electrónico</h4>
                    <p><a href="mailto:contacto@institucion.edu.pe" class="contact-link">servitektechnologies@gmail.com</a></p>
                </div>
            </div>

            <!-- Mapa de ubicación -->
            <div class="col-md-6">
                <div class="map-box shadow rounded animate-slide-in">
                    <iframe 
                        class="w-100 rounded"
                        height="300"
                        frameborder="0"
                        style="border:0;"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.802696232975!2d-77.26968113145642!3d-11.565997555694508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910688dc2132e839%3A0x43ecd15d815c4a51!2sCa.%20Francisco%20Bolognesi%2C%20Chancay%2015131!5e0!3m2!1ses-419!2spe!4v1740985768478!5m2!1ses-419!2spe">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Fondo con degradado */
.contact-section {
    margin-top: -1.5rem;
    padding: 2rem 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}


/* Caja de contacto */
.contact-box {
    background: #fff;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 305px;
}

.contact-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Enlaces */
.contact-link {
    font-size: 1.2rem;
    color: #007bff;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
}

.contact-link:hover {
    color: #0056b3;
    text-decoration: underline;
}

/* Animaciones */
.animate-fade-in {
    animation: fadeIn 1s ease-in-out;
}

.animate-slide-in {
    animation: slideIn 1s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideIn {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

/* Tipografía mejorada */
h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 55px;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to right, #ffe100, #d60000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 20px;
}

p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    color: #444;
}
</style>