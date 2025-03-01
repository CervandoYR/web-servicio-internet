<template>
  <main class="content">
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
        <div class="container">
          <!-- Logo -->
          <router-link to="/" class="navbar-brand fw-bold">
            <i class="bi bi-globe2 me-2"></i>NetSystems
          </router-link>

          <!-- Botón de colapso -->
          <button
            class="navbar-toggler"
            type="button"
            @click="toggleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Enlaces del navbar -->
          <div class="collapse navbar-collapse" :class="{ 'show': showNavbar }">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  <i class="bi bi-house-door me-1"></i>Inicio
                </a>
              </li>
             
              <li class="nav-item">
                <a class="nav-link" href="#plans">
                  <i class="bi bi-info-circle me-1"></i>Planes
                </a>
              </li>
            
              <li class="nav-item">
                <a class="nav-link" href="#contacto">
                  <i class="bi bi-envelope me-1"></i>Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </main>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      showNavbar: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
  },
};
</script>

<style scoped>

.navbar {
  background-color: #F1634C;
  transition: all 0.3s ease-in-out;
}

.navbar-toggler {
  border: none;
}

.content {
  margin-top: 70px; 
  transition: margin-top 0.3s ease-in-out;
}

.navbar-collapse.show + .content {
  margin-top: auto; 
}


.navbar-toggler-icon {
  filter: brightness(0.8);
}

.nav-link {
  color: #fff;
  font-weight: 600;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: #ffd700; 
}

.nav-link.active {
  color: #ffd700; 
  text-decoration: underline;
}

.shadow-sm {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}
</style>
