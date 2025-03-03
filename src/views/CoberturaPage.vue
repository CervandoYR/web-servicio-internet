<template>
    <div class="container">
      <h2 class="text-center my-4">Zonas de Cobertura</h2>
  
      <!-- Lista de lugares de cobertura (arriba del mapa) -->
      <div class="coverage-list-container">
        <ul class="coverage-list">
          <li v-for="area in coverageAreas" :key="area.name">
            <i class="fas fa-map-marker-alt"></i>
            <a :href="area.link" target="_blank">{{ area.name }}</a>
          </li>
        </ul>
      </div>
  
      <!-- Mapa interactivo -->
      <div id="map" class="map-container"></div>
    </div>
  </template>
  
  <script>
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  
  // Corrección del icono de los marcadores
  import markerIcon from "leaflet/dist/images/marker-icon.png";
  import markerShadow from "leaflet/dist/images/marker-shadow.png";
  // lat -12.156238092320935, lng -76.96831658025366 solo 4 digitos
  export default {
    data() {
      return {
        coverageAreas: [
          { name: "Chancay Centro", lat: -11.5625, lng: -77.2708 },
          { name: "Peralvillo", lat: -11.5723, lng: -77.2655 },
          { name: "Huaral", lat: -11.4956, lng: -77.2089 }
        ]
      };
    },
    computed: {
      coverageWithLinks() {
        return this.coverageAreas.map(area => ({
          ...area,
          link: `https://www.google.com/maps?q=${area.lat},${area.lng}`
        }));
      }
    },
    mounted() {
      const map = L.map("map").setView([-11.5625, -77.2708], 12);
  
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
      }).addTo(map);
  
      // Definir icono personalizado
      const customIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
  
   
      this.coverageWithLinks.forEach(area => {
        L.marker([area.lat, area.lng], { icon: customIcon })
          .addTo(map)
          .bindPopup(`<a href="${area.link}" target="_blank">${area.name}</a>`);
      });
    }
  };
  </script>
  
  <style scoped>
  /* Estilos del mapa */
  .map-container {
    height: 400px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
  }
  
  /* Estilos de la lista (arriba del mapa) */
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
    color: #333;
    font-weight: bold;
  }
  
  .coverage-list i {
    color: #f1634c;
    margin-right: 8px;
  }
  

  
  .coverage-list a:hover {
    text-decoration: underline;
  }
  </style>
  