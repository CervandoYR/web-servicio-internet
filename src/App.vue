<template>
  <div id="app">
    <AppNavbar />
    <div class="content">
      <router-view /> <!-- Aquí se renderiza la página actual -->
    </div>
    <AppFooter />
  </div>
  <AppQuestions/>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import AppQuestions from './components/AppQuestions.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "leaflet-control-geocoder";
import 'bootstrap';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    AppQuestions,
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 100% del alto de la pantalla */
}

.content {
  flex: 1; /* Hace que el contenido principal ocupe el espacio disponible */
}
</style>
