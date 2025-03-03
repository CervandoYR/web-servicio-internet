<template>
  <div class="container">
    <h2 class="text-center my-4 animate-fade-in">Zonas de Cobertura</h2>

    <!-- Lista de lugares de cobertura -->
    <div class="coverage-list-container">
      <ul class="coverage-list">
        <li v-for="area in coverageAreas" :key="area.name" class="animate-slide-in">
          <i class="fas fa-map-marker-alt"></i>
          <a :href="area.link" target="_blank">{{ area.name }}</a>
        </li>
      </ul>
    </div>

    <!-- Mapa con animación de carga -->
    <div class="map-container">
      <div v-if="loading" class="loader-container map-box shadow rounded animate-slide-in">
        <div class="loader"></div>
      </div>

      <iframe
        :src="mapUrl"
        width="100%"
        height="480"
        style="border:0; border-radius:10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"
        allowfullscreen
        loading="lazy"
        @load="loading = false"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true, // Muestra el loader al inicio
      coverageAreas: [
        { name: "Chancay Centro", lat: -11.5625, lng: -77.2708 },
        { name: "Peralvillo", lat: -11.5723, lng: -77.2655 },
        { name: "Huaral", lat: -11.4956, lng: -77.2089 }
      ]
    };
  },
  computed: {
    mapUrl() {
      return `https://www.google.com/maps/d/u/0/embed?mid=1KG39yDzDV1oW3hCITTbtk01QfTCtNgQ&ehbc=2E312F&noprof=1`;
    }
  }
};
</script>

<style scoped>
/* Estilos de la lista de cobertura */
.coverage-list-container {
  text-align: center;
  margin-bottom: 15px;
}

.coverage-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.coverage-list li {
  font-size: 1.2rem;
  margin: 10px 0;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.coverage-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.coverage-list i {
  color: #f1634c;
  margin-right: 8px;
}

.contact-link {
  font-size: 1.2rem;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

/* Estilos del contenedor del mapa */
.map-container {
  position: relative;
  width: 100%;
  height: 480px;
}

/* Loader centrado */
.loader-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 2;
}

h2 {
  font-size: 55px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  background: linear-gradient(to right, #ffe100, #d60000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  margin-bottom: 20px;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  color: #444;
}

/* Loader (círculo giratorio) */
.loader {
  width: 50px;
  height: 50px;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #f1634c;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Animación del loader */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
</style>