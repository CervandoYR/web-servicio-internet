<template>
  <div data-aos="fade-up">
    <div class="container p-4 p-md-5 shadow rounded-3 bg-light contact-form-container">
      <h2 class="text-center mb-3 text-primary fw-bold">Contáctanos</h2>
      <p class="text-center text-muted mb-4">
        ¿Tienes alguna consulta? Envíanos un mensaje.
      </p>
      <Form ref="contactForm" @submit="submitForm" v-slot="{ meta }" class="animate__animated animate__fadeIn">
        <div class="row g-3">
          <div class="col-md-6">
             <label for="name" class="form-label text-primary fw-semibold">Nombre</label>
             <Field type="text" class="form-control border-primary" id="name" name="name" rules="required|onlyLetters" v-model="name"/>
             <ErrorMessage name="name" class="text-danger small mt-1 d-block" />
          </div>
          <div class="col-md-6">
            <label for="lastname" class="form-label text-primary fw-semibold">Apellido</label>
            <Field type="text" class="form-control border-primary" id="lastname" name="lastname" rules="required|onlyLetters" v-model="lastname"/>
            <ErrorMessage name="lastname" class="text-danger small mt-1 d-block" />
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label text-primary fw-semibold">Correo Electrónico</label>
            <Field type="email" class="form-control border-primary" id="email" name="email" rules="required|email" v-model="email"/>
            <ErrorMessage name="email" class="text-danger small mt-1 d-block" />
          </div>
          <div class="col-md-6">
             <label for="phone" class="form-label text-primary fw-semibold">Teléfono</label>
             <Field type="text" class="form-control border-primary" id="phone" name="phone" rules="required|phoneNumber" v-model="phone"/>
             <ErrorMessage name="phone" class="text-danger small mt-1 d-block" />
          </div>
          <div class="col-12">
            <label for="message" class="form-label text-primary fw-semibold">Mensaje</label>
            <Field as="textarea" class="form-control border-primary fixed-textarea" id="message" name="message" rules="required|textWithNumbers" v-model="message"/>
            <ErrorMessage name="message" class="text-danger small mt-1 d-block" />
          </div>
          <div class="col-12 text-center mt-4">
             <button
               type="submit"
               class="btn btn-primary px-5 py-2 submit-button"
               :disabled="!meta.valid || isSubmitting"
               :class="{ 'sending': isSubmitting }"
               style="transition: all 0.3s;"
              >
               <span v-if="!isSubmitting">Enviar Mensaje</span>
               <span v-else class="animate__animated animate__fadeIn">
                 <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                 Enviando...
               </span>
             </button>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email } from "@vee-validate/rules";
import 'aos/dist/aos.css';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzyKIt1fHs6q8avqDymVh8S_a57HAH-_ZPWm3R1l1prwPH9zmPIbyx_09CMsalrdYDsRQ/exec";

// Definir reglas de validación (movido fuera del export default para mejor práctica)
defineRule("onlyLetters", (value) => {
  const onlyLettersRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return !value || onlyLettersRegex.test(value) || "Este campo solo debe contener letras y espacios.";
});
defineRule("textWithNumbers", (value) => {
  const onlyNumbersRegex = /^[0-9]+$/;
  return !value || !onlyNumbersRegex.test(value) || "El mensaje no puede contener solo números.";
});
defineRule("phoneNumber", (value) => {
  const phoneRegex = /^[0-9]{9}$/;
  return !value || phoneRegex.test(value) || "El teléfono debe tener 9 dígitos numéricos.";
});
defineRule("required", required);
defineRule("email", email);

configure({
  validateOnInput: true, // Validar mientras se escribe
  generateMessage: (context) => {
    const messages = {
      required: "Este campo es obligatorio.",
      email: "Correo electrónico inválido.",
      onlyLetters: "Solo se permiten letras y espacios.",
      textWithNumbers: "No puede ser solo números.",
      phoneNumber: "Debe tener 9 dígitos numéricos.",
    };
    return messages[context.rule.name] || `Error en el campo.`;
  },
});

export default {
  name: "ContactPage",
  components: { Form, Field, ErrorMessage },
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
      isSubmitting: false,
    };
  },
  mounted() {
      // AOS se inicializa en la vista padre (HomePage)
      // AOS.init({ duration: 1000 });
  },
  methods: {
    async submitForm() {
  this.isSubmitting = true;
  const formData = new FormData();
  formData.append('name', this.name);
  formData.append('lastname', this.lastname);
  formData.append('email', this.email);
  formData.append('phone', this.phone);
  formData.append('message', this.message);

  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData
    });

    // Verifica si la respuesta es OK
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    // Intenta parsear JSON
    let data;
    const text = await response.text(); // Primero lee como texto
    try {
      data = JSON.parse(text);
    } catch (jsonError) {
      console.warn("Respuesta no es JSON válido:", text);
      // Si llegó aquí, pero se guardó en la hoja, asumimos éxito
      data = { result: "success" };
    }

    if (data.result !== 'success') {
      throw new Error(data.error || 'Error del servidor');
    }

    // ÉXITO
    this.$refs.contactForm.resetForm();
    this.name = ""; this.lastname = ""; this.email = ""; this.phone = ""; this.message = "";

    Swal.fire({
      title: "¡Mensaje Enviado!",
      text: "Gracias por contactarnos. Te responderemos pronto.",
      icon: "success",
      confirmButtonColor: "#007bff",
      timer: 4000,
      timerProgressBar: true,
    });

  } catch (error) {
    console.error("Error al enviar:", error);
    Swal.fire({
      title: "Error",
      text: "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
      icon: "error",
      confirmButtonColor: "#dc3545",
    });
  } finally {
    this.isSubmitting = false;
  }
},
  },
};
</script>

<style scoped>
/* Estilos específicos para este formulario */
.contact-form-container {
  max-width: 800px; /* Ancho máximo del formulario */
  margin-left: auto;
  margin-right: auto;
  /* El fondo claro y el color de texto se heredan de main.css */
}

/* Ajustes menores para el formulario */
.form-label {
  font-weight: 600; /* Etiquetas un poco más gruesas */
  color: #0d6efd; /* Color primario Bootstrap */
}

.form-control {
  border-radius: 8px;
  border: 1px solid #ced4da; /* Borde estándar */
  padding: 0.75rem;
}
.form-control:focus {
   border-color: #86b7fe; /* Borde azul al enfocar */
   box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}


.fixed-textarea {
  min-height: 120px; /* Un poco más alto */
  resize: vertical; /* Permitir redimensionar verticalmente */
}

.submit-button {
  font-size: 1.1rem; /* Tamaño de texto ligeramente menor */
  font-weight: 600;
  padding: 10px 30px;
  border-radius: 50px; /* Botón redondeado */
  transition: all 0.3s ease-in-out;
  /* Usar el color primario de Bootstrap por defecto */
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.submit-button:hover {
  background-color: #0b5ed7 !important; /* Más oscuro al pasar el ratón */
  border-color: #0a58ca !important;
  transform: translateY(-2px); /* Ligera elevación */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.submit-button:disabled {
  background-color: #6c757d !important; /* Gris cuando deshabilitado */
  border-color: #6c757d !important;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Estilo para el estado 'enviando' */
.submit-button.sending {
  background-color: #ffc107 !important; /* Amarillo mientras envía */
  border-color: #ffc107 !important;
  color: #000; /* Texto oscuro en fondo amarillo */
  cursor: not-allowed;
}

.text-danger {
  font-size: 0.85rem; /* Mensajes de error un poco más pequeños */
}
</style>