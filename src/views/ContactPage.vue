<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100" data-aos="fade-up">
    <div class="contact-page container p-5 shadow rounded-3 bg-light">
      <h1 class="text-center mb-4 text-primary fw-bold">Contáctanos</h1>
      <p class="text-center text-muted mb-5">
        ¿Tienes alguna consulta? Envíanos un mensaje y te responderemos pronto.
      </p>
      <Form ref="contactForm" @submit="submitForm" v-slot="{ meta }" class="animate__animated animate__fadeIn">
        <div class="contact-background mb-4">
          <label for="name" class="form-label text-primary fw-semibold">Nombre</label>
          <Field
            type="text"
            class="form-control border-primary"
            id="name"
            name="name"
            rules="required|onlyLetters"
            v-model="name"
          />
          <ErrorMessage name="name" class="text-danger small mt-1 d-block" />
        </div>

        <div class="contact-background mb-4">
          <label for="lastname" class="form-label text-primary fw-semibold">Apellido</label>
          <Field
            type="text"
            class="form-control border-primary"
            id="lastname"
            name="lastname"
            rules="required|onlyLetters"
            v-model="lastname"
          />
          <ErrorMessage name="lastname" class="text-danger small mt-1 d-block" />
        </div>

        <div class="mb-4">
          <label for="email" class="form-label text-primary fw-semibold">Correo Electrónico</label>
          <Field
            type="email"
            class="form-control border-primary"
            id="email"
            name="email"
            rules="required|email"
            v-model="email"
          />
          <ErrorMessage name="email" class="text-danger small mt-1 d-block" />
        </div>

        <div class="mb-4">
          <label for="phone" class="form-label text-primary fw-semibold">Teléfono</label>
          <Field
            type="text"
            class="form-control border-primary"
            id="phone"
            name="phone"
            rules="required|phoneNumber"
            v-model="phone"
          />
          <ErrorMessage name="phone" class="text-danger small mt-1 d-block" />
        </div>

        <div class="mb-4">
          <label for="message" class="form-label text-primary fw-semibold">Mensaje</label>
          <Field
            as="textarea"
            class="form-control border-primary fixed-textarea"
            id="message"
            name="message"
            rules="required|textWithNumbers"
            v-model="message"
          />
          <ErrorMessage name="message" class="text-danger small mt-1 d-block" />
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="btn btn-primary px-5 py-2 submit-button"
            :disabled="!meta.valid || isSubmitting"
            :class="{ 'btn-danger': hoverSubmit, 'sending': isSubmitting }"
            style="transition: all 0.3s;"
            @mouseover="hoverSubmit = true"
            @mouseleave="hoverSubmit = false"
          >
            <span v-if="!isSubmitting">Enviar</span>
            <span v-else class="animate__animated animate__fadeIn">
              <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Enviando...
            </span>
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email } from "@vee-validate/rules";
import AOS from 'aos'
import 'aos/dist/aos.css'

// Definir reglas de validación
defineRule("onlyLetters", (value) => {
  const onlyLettersRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return !value || onlyLettersRegex.test(value) || "Este campo no debe contener números ni caracteres especiales.";
});

defineRule("textWithNumbers", (value) => {
  const onlyNumbersRegex = /^[0-9]+$/;
  return !value || !onlyNumbersRegex.test(value) || "El mensaje no puede ser solo números.";
});

defineRule("phoneNumber", (value) => {
  const phoneRegex = /^[0-9]{9}$/;
  return !value || phoneRegex.test(value) || "El teléfono debe contener exactamente 9 dígitos numéricos.";
});

defineRule("required", required);
defineRule("email", email);

configure({
  validateOnInput: true,
  generateMessage: (context) => {
    const messages = {
      required: "Este campo es obligatorio.",
      email: "Por favor, introduce un correo electrónico válido.",
      onlyLetters: "Este campo no debe contener números ni caracteres especiales.",
      textWithNumbers: "El mensaje no puede ser solo números.",
      phoneNumber: "El teléfono debe contener exactamente 9 dígitos numéricos.",
    };
    return messages[context.rule.name] || `Error en el campo ${context.field}`;
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
      hoverSubmit: false,
      isSubmitting: false,
    };
  },
  mounted() {
        AOS.init({ duration: 1000 });
    },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      try {
        const response = await axios.post("https://backend-servicio-internet-production.up.railway.app/api/contact/", {
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          message: this.message,
        });

        console.log("Formulario enviado con éxito:", response.data);

        // Limpiar los campos
        this.name = "";
        this.lastname = "";
        this.email = "";
        this.phone = "";
        this.message = "";

        this.$refs.contactForm.resetForm();

        // Mostrar animación con SweetAlert2
        Swal.fire({
          title: "¡Mensaje enviado!",
          text: "Tu mensaje ha sido recibido, te responderemos pronto.",
          icon: "success",
          confirmButtonColor: "#007bff",
          confirmButtonText: "Aceptar",
          timer: 4000,
          showClass: {
            popup: "animate__animated animate__fadeInDown"
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp"
          }
        });

      } catch (error) {
        console.error("Error al enviar el formulario:", error.response ? error.response.data : error.message);
        Swal.fire({
          title: "Error",
          text: "Hubo un problema al enviar el mensaje. Inténtalo nuevamente.",
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "Cerrar",
        });
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>


<style scoped>
/* Estilos */
.container {
  max-width: 700px;
  background: linear-gradient(135deg, #f8f9fa, #dee2e6);
}

.input-custom {
  border: 2px solid #007bff;
  border-radius: 8px;
  padding: 10px;
  font-size: 1.1rem;
}

.fixed-textarea {
  height: 110px;
  resize: none;
}

.submit-button {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 30px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.submit-button:hover {
  background-color: #0056b3 !important;
  transform: scale(1.05);
}

.submit-button:disabled {
  background-color: #ccc !important;
  cursor: not-allowed;
}

.submit-button.sending {
  background-color: #ffc107 !important;
  border-color: #ffc107 !important;
  cursor: not-allowed;
}

.error-message {
  font-size: 0.9rem;
}
</style>
