<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
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
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email } from "@vee-validate/rules";

defineRule("onlyLetters", (value) => {
  const onlyLettersRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return !value || onlyLettersRegex.test(value) || "El nombre no debe contener números";
});

defineRule("textWithNumbers", (value) => {
  const onlyNumbersRegex = /^[0-9]+$/;
  return !value || !onlyNumbersRegex.test(value) || "El mensaje no puede ser solo números";
});

defineRule("required", required);
defineRule("email", email);

configure({
  validateOnInput: true, // Valida en tiempo real
  generateMessage: (context) => {
    const messages = {
      required: `Este campo es obligatorio.`,
      email: "Por favor, introduce un correo electrónico válido.",
      onlyLetters: "El nombre no debe contener números.",
      textWithNumbers: "El mensaje no puede ser solo números.",
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
      email: "",
      message: "",
      hoverSubmit: false,
      isSubmitting: false, // Controla la animación de "Enviando..."
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true; // Iniciar animación
      try {
      const response = await axios.post("https://backend-servicio-internet-production.up.railway.app/", {  // O la URL de Railway
  name: this.name,
  email: this.email,
  message: this.message,
});

      console.log("Formulario enviado con éxito:", response.data);

      // Limpiar los campos
      this.name = "";
      this.email = "";
      this.message = "";

      // Restablecer la validación
      this.$refs.contactForm.resetForm();

      alert("Mensaje enviado correctamente");
    } catch (error) {
      console.error("Error al enviar el formulario:", error.response ? error.response.data : error.message);
      alert("Error al enviar el formulario. Intente nuevamente.");
    } finally {
      this.isSubmitting = false; // Detener animación
    }
    },
  },
};
</script>

<style scoped>
/* Espaciado superior para que no esté tan junto a la sección anterior */
.contact-section {
  padding-top: 100px;
  padding-bottom: 50px;
}


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

.textarea-custom {
  height: 150px;
  resize: none;
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

.btn-primary:hover {
  background-color: rgb(0, 0, 255) !important;
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