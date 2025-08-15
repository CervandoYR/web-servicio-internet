<template>
    <div class="about-page container mt-5">
        <!-- Sección de Contacto Mejorada -->
        <div class="row mt-6 contact-section" data-aos="fade-up">
            <div class="col-md-12 text-center">
                <h2 class="mb-4 animate-fade-in">Contáctanos en Perú - Soporte 24/7</h2>
                <p class="lead animate-fade-in">¡Estamos aquí para ayudarte! Comunícate con NetSystems para soporte técnico en todo Chancay.</p>
            </div>

            <!-- Información de contacto -->
            <div class="col-md-12 mb-4 text-center">
                <div class="contact-box shadow p-4 animate-slide-in" data-aos="fade-right">
                    <h4><i class="fas fa-phone-alt text-primary"></i> Teléfono</h4>
                    <p class="mb-2">+51 924 076 526</p>
                    
                    <h4><i class="fab fa-whatsapp text-success"></i> WhatsApp</h4>
                    <p><a href="https://wa.me/51924076526" target="_blank" class="contact-link">Enviar mensaje</a></p>

                    <h4><i class="fas fa-envelope text-danger"></i> Correo Electrónico</h4>
                    <p><a href="mailto:servitektechnologies@gmail.com" class="contact-link">servitektechnologies@gmail.com</a></p>
                </div>
            </div>

         

            <!-- Mapa de ubicación -->
            <div class="col-md-12">
                <div class="map-box shadow rounded animate-slide-in" data-aos="fade-up">
                    <iframe 
                        class="w-100 rounded"
                        height="400"
                        frameborder="0"
                        style="border:0;"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6459999999997!2d-77.27107158518284!3d-11.571363191797463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d2b5c6c5b6f5%3A0x1b6b5b6c5b6c5b6c!2sChancay%2C%20Peru!5e0!3m2!1sen!2sus!4v1698795600000!5m2!1sen!2sus">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    name: 'ContactPage',
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    mounted() {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        })
    },
    methods: {
        submitForm() {
            alert(`Gracias ${this.form.name}, tu mensaje ha sido enviado. Nos contactaremos pronto a ${this.form.email}.`);
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        }
    }
}
</script>

<style scoped>
/* Importar fuente Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.contact-section {
    margin-top: -1.5rem;
    padding: 2rem 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.contact-box {
    background: #fff;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
}

.contact-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.contact-link {
    font-size: 1.2rem;
    color: #007bff;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
}

.contact-link:hover {
    color: #0056b3;
    text-decoration: underline;
}

.form-control {
    border-radius: 8px;
    border: 1px solid #ced4da;
    padding: 0.75rem;
    font-family: 'Roboto', sans-serif;
}

.btn-cta-contact {
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
    width: 100%;
}

.btn-cta-contact:hover {
    background-color: #e6b800;
    transform: translateY(-2px);
}

.map-box iframe {
    border-radius: 10px;
}

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

h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    background: linear-gradient(to right, #ffe100, #d60000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    letter-spacing: 1px;
    margin-bottom: 1rem;
}

.lead {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: #444;
    margin-bottom: 1.5rem;
}

p, h4 {
    font-family: 'Roboto', sans-serif;
    color: #555;
}

h4 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

/* Responsive */
@media (max-width: 768px) {
    .contact-section { padding: 1.5rem 0; }
    .contact-box { margin-bottom: 1rem; height: auto; }
    h2 { font-size: 2rem; }
    .lead { font-size: 1.15rem; }
    .contact-link { font-size: 1.1rem; }
    .map-box iframe { height: 250px; }
    .btn-cta-contact { font-size: 1rem; padding: 0.6rem 1.2rem; }
}

@media (max-width: 480px) {
    h2 { font-size: 1.75rem; }
    .lead { font-size: 1.1rem; }
    .contact-link { font-size: 1rem; }
    .map-box iframe { height: 200px; }
    .btn-cta-contact { font-size: 0.9rem; padding: 0.5rem 1rem; }
}
</style>