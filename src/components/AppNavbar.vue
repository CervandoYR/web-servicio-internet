<template>
  <main class="content">
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
        <div class="container">
          <!-- Logo -->
          <router-link to="/" class="navbar-brand fw-bold" @click.prevent="scrollToHome">
            <i class="fas fa-network-wired me-2"></i>NetSystems
          </router-link>

          <!-- Botón de colapso -->
          <button class="navbar-toggler" type="button" @click="toggleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Enlaces del navbar -->
          <div class="collapse navbar-collapse" :class="{ 'show': showNavbar }">
            <ul class="navbar-nav ms-auto">
              <router-link to="/" class="nav-link" @click="scrollToHome">
                <i class="fas fa-house me-1"></i>Inicio
              </router-link>

              <router-link to="/" class="nav-link" @click="scrollToSection('plans')">
                <i class="fas fa-list-alt me-1"></i>Planes
              </router-link>

              <router-link to="/" class="nav-link" @click="scrollToSection('info')">
                <i class="fas fa-star me-1"></i>Beneficios
              </router-link>

              <router-link to="/" class="nav-link" @click="scrollToSection('contacto')">
                <i class="fas fa-envelope me-1"></i>Contacto
              </router-link>

              <li class="nav-item">
                <router-link to="/conocenos" class="nav-link" @click="closeNavbarConocenos()">
                  <i class="fas fa-users me-1"></i>Conócenos
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/about" class="nav-link" @click="closeNavbarAbout()">
                  <i class="fas fa-info-circle me-1"></i>Info
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/cobertura" class="nav-link" @click="closeNavbarCobertura()">
                  <i class="fas fa-wifi me-1"></i>Cobertura
                </router-link>
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
  closeNavbar() {
    this.showNavbar = false;
  },
  closeNavbarAndScrollToTop(route) {
    this.closeNavbar(); // Aseguramos que esta función existe

    if (this.$route.path !== route) {
      this.$router.push(route).then(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "instant" });
        });
      });
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  },
  scrollToHome() {
    this.closeNavbarAndScrollToTop("/");
  },
  closeNavbarConocenos() {
    this.closeNavbarAndScrollToTop("/conocenos");
  },
  closeNavbarAbout() {
    this.closeNavbarAndScrollToTop("/about");
  },
  closeNavbarCobertura() {
    this.closeNavbarAndScrollToTop("/cobertura");
  },
  scrollToSection(sectionId) {
    this.closeNavbar(); // Aseguramos que la navbar se cierre

    if (this.$route.path !== "/") {
      this.$router.push("/").then(() => {
        setTimeout(() => {
          this.scrollToElement(sectionId);
        }, 300);
      });
    } else {
      this.scrollToElement(sectionId);
    }
  },
  scrollToElement(id) {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

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
  margin-top: 40px;
  transition: margin-top 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

}


.navbar-collapse.show+.content {
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

/* Animación de deslizamiento para el menú desplegable */
@keyframes slideDown {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px; /* Ajusta el valor según la altura de tu menú */
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    max-height: 500px; /* Ajusta el valor según la altura de tu menú */
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
}

.navbar-collapse.show {
  animation: slideDown 0.5s ;
}

.navbar-collapse:not(.show) {
  animation: slideUp 0.5s ;
}

</style>
