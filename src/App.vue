<template>
  <div id="app">
    <AppNavbar />
    <div class="content">
      <router-view /> 
    </div>
    <AppFooter />
    <AppQuestions />
    <AppHomeButton />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
import AppQuestions from './components/AppQuestions.vue';
import AppHomeButton from './components/AppHomeButton.vue'; // Importa el nuevo componente

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'leaflet-control-geocoder';
import 'bootstrap';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    AppQuestions,
    AppHomeButton, // Registra el componente
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

html,
body,
#app {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif; /* Fuente global */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>