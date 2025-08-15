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
  name: 'CoveragePage',
  data() {
    return {
      loading: true,
      coverageAreas: [
        { name: "Calle Bolognesi", link: "https://www.google.com/maps/search/?api=1&query=Calle+Bolognesi,+Chancay,+Peru" },
        { name: "Prolongación Tacna", link: "https://www.google.com/maps/search/?api=1&query=Prolongación+Tacna,+Chancay,+Peru" },
        { name: "Calle Belén", link: "https://www.google.com/maps/search/?api=1&query=Calle+Belén,+Chancay,+Peru" },
        { name: "Calle Miguel Grau", link: "https://www.google.com/maps/search/?api=1&query=Calle+Miguel+Grau,+Chancay,+Peru" },
        { name: "Av. 28 de Julio", link: "https://www.google.com/maps/search/?api=1&query=Avenida+28+de+Julio,+Chancay,+Peru" },
        { name: "Tnt. Pringles", link: "https://www.google.com/maps/search/?api=1&query=Tnt+Pringles,+Chancay,+Peru" },
        { name: "Asovisem", link: "https://www.google.com/maps/search/?api=1&query=Asovisem,+Chancay,+Peru" },
        { name: "La Portada", link: "https://www.google.com/maps/search/?api=1&query=La+Portada,+Chancay,+Peru" },
        { name: "La Rivera", link: "https://www.google.com/maps/search/?api=1&query=La+Rivera,+Chancay,+Peru" },
        { name: "Boulevard Chancay", link: "https://www.google.com/maps/search/?api=1&query=Boulevard+Chancay,+Chancay,+Peru" }
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.coverage-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #f1f3f5 100%);
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  margin-top: 8vh;
}

.title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.8rem;
  background: linear-gradient(to right, #ffe100, #d60000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
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
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  align-items: start;
}

.coverage-list-container {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.coverage-list-container:hover {
  transform: translateY(-5px);
}

.coverage-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.coverage-list li {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.3s ease;
}

.coverage-list li:hover {
  background: #f1f3f5;
  transform: translateX(5px);
}

.coverage-list i {
  color: #f1634c;
  font-size: 1.3rem;
}

.coverage-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.coverage-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

.map-container {
  position: relative;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
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
  background: rgba(255, 255, 255, 0.9);
  z-index: 2;
}

.loader {
  width: 48px;
  height: 48px;
  border: 6px solid #e9ecef;
  border-top: 6px solid #f1634c;
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

/* Responsive Design */
@media (max-width: 992px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .map-container {
    height: 350px;
  }
}

@media (max-width: 576px) {
  .coverage-container {
    padding: 1.5rem 1rem;
    margin-top: 4vh;
  }
  .title {
    font-size: 2rem;
  }
  .coverage-list li {
    font-size: 1rem;
  }
  .map-container {
    height: 300px;
  }
}
</style>