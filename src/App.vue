<template>
  <div id="app">
    <AppNavbar />
    <router-view /> <!-- Aquí se renderiza la página actual -->
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "leaflet-control-geocoder";


export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  }
}
</script>
