<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="contact-page container p-5 shadow rounded-3 bg-light">
      <h1 class="text-center mb-4 text-primary fw-bold">Contáctanos</h1>
      <p class="text-center text-muted mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum tempore, recusandae officia sapiente, tempora eos enim nihil voluptatibus repudiandae, ipsam assumenda eius blanditiis! Nulla, consectetur consequuntur. Obcaecati, dignissimos cupiditate.
      </p>
      <Form @submit="submitForm" v-slot="{ meta }" class="animate__animated animate__fadeIn">
        <div class="mb-4">
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
            class="btn btn-primary px-5 py-2"
            :disabled="!meta.valid"
            style="transition: all 0.3s;"
            @mouseover="hoverSubmit = true"
            @mouseleave="hoverSubmit = false"
            :class="{ 'btn-danger': hoverSubmit }"
          >
            Enviar
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

// Regla personalizada para validar solo letras
defineRule("onlyLetters", (value) => {
  const onlyLettersRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (!value) return true; // Permitir que la regla 'required' maneje campos vacíos
  return onlyLettersRegex.test(value) || "El nombre no debe contener números";
});

// Regla personalizada para validar texto con o sin números
defineRule("textWithNumbers", (value) => {
  const onlyNumbersRegex = /^[0-9]+$/;
  if (!value) return true; // Permitir que la regla 'required' maneje campos vacíos
  return !onlyNumbersRegex.test(value) || "El mensaje no puede ser solo números";
});

// Reglas base
defineRule("required", required);
defineRule("email", email);

// Configuración de VeeValidate para español
configure({
  generateMessage: (context) => {
    const messages = {
      required: `El campo ${context.field} es obligatorio.`,
      email: "Por favor, introduce un correo electrónico válido.",
      onlyLetters: "El nombre no debe contener números",
      textWithNumbers: "El mensaje no puede ser solo números",
    };
    return messages[context.rule.name] || `Error en el campo ${context.field}`;
  },
});

export default {
  name: "ContactPage",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      hoverSubmit: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("/api/contact", {
          name: this.name,
          email: this.email,
          message: this.message,
        });

        console.log("Formulario enviado con éxito:", response.data);

        this.name = "";
        this.email = "";
        this.message = "";
        alert("Mensaje enviado correctamente");
      } catch (error) {
        console.error(
          "Error al enviar el formulario:",
          error.response ? error.response.data : error.message
        );
        alert("Error al enviar el formulario. Intente nuevamente.");
      }
    },
  },
};
</script>

<style>
.contact-page {
  max-width: 800px; 
  margin: 0 auto;
  padding: 60px;
}

.fixed-textarea {
  height: 180px;
  resize: none; 
}

.btn-primary:hover {
  background-color:rgb(0, 0, 255) !important;
}

.form-control {
  font-size: 1.1rem; 
}

.form-label {
  font-size: 1.1rem; 
}

.error-message {
  font-size: 0.9rem;
}
</style>
