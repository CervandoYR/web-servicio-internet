<template>
  <div class="coverage-container">
    <h2 class="title animate-fade-in">Zonas de Cobertura</h2>

    <div class="content-grid">
      <!-- Lista de lugares de cobertura -->
      <div class="coverage-list-container animate-slide-in">
        <ul class="coverage-list">
          <li v-for="area in coverageAreas" :key="area.name">
            <i class="fas fa-map-marker-alt"></i>
            <a :href="area.link" target="_blank">{{ area.name }}</a>
          </li>
        </ul>
      </div>

      <!-- Mapa con animación de carga -->
      <div class="map-container animate-slide-in">
        <div v-if="loading" class="loader-container">
          <div class="loader"></div>
        </div>
        <iframe
          :src="mapUrl"
          class="map-frame"
          allowfullscreen
          loading="lazy"
          @load="loading = false"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      coverageAreas: [
        { name: "CALLE BOLOGNESI" },
        { name: "PROLONGACIÓN TACNA" },
        { name: "CALLE BELEN" },
        { name: "CALLE MIGUEL GRAU" },
        { name: "AV 28 DE JULIO" },
        { name: "TNT PRINGLES" },
        { name: "ASOVISEM" },
        { name: "LA PORTADA" },
        { name: "LA RIVERA" },
        { name: "BOULEVARD CHANCAY" }
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
.coverage-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 6vh;
}

.title {
  font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 55px;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to right, #ffe100, #d60000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 20px;
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


.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
}

.coverage-list-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.coverage-list {
  list-style: none;
  padding: 0;
}

.coverage-list li {
  font-size: 1.2rem;
  margin: 8px 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.coverage-list li:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.coverage-list i {
  color: #f1634c;
}

.map-container {
  position: relative;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

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

.loader {
  width: 40px;
  height: 40px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #f1634c;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.map-frame {
  width: 100%;
  height: 100%;
  border: 0;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>