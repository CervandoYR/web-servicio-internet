<template>
  <div id="app">
    <AppNavbar />
    <HomePage/>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from './views/HomePage.vue';




export default {
  name: 'App',
  components: {
    AppNavbar,
    HomePage,
    AppFooter
  }
}
</script>