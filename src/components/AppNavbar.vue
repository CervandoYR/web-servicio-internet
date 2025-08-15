<template>
  <main class="content">
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
        <div class="container">
          <!-- Logo -->
          <router-link to="/" class="navbar-brand fw-bold" @click.prevent="scrollToHome">
            <i class="fas fa-network-wired me-2"></i>NetSystems
          </router-link>

          <!-- Botón de colapso con animación -->
          <button class="navbar-toggler glow" type="button" @click="toggleNavbar">
            <i :class="showNavbar ? 'fas fa-xmark' : 'fas fa-bars'"></i>
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

              <!--<router-link to="/" class="nav-link" @click="scrollToSection('contacto')">
                <i class="fas fa-envelope me-1"></i>Contacto
              </router-link>-->

              <li class="nav-item">
                <router-link to="/conocenos" class="nav-link" @click="closeNavbarConocenos()">
                  <i class="fas fa-user-group me-1"></i>Conócenos
                </router-link>
              </li>
              

              <li class="nav-item">
                <router-link to="/about" class="nav-link" @click="closeNavbarAbout()">
                  <i class="fas fa-headset me-1"></i> Soporte
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
      this.closeNavbar();
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
      this.closeNavbar();
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
  background-color: #fff;
  transition: transform 0.3s ease-in-out, background-color 0.3s;
  animation: pulseGlow 1.5s infinite alternate;
}

/* Animación de brillo */
@keyframes pulseGlow {
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.9);
  }
}

/* Detener animación cuando el menú está abierto */
.navbar-collapse.show + .navbar-toggler {
  animation: none;
}

.navbar-toggler:hover {
  background-color: #ff8f7b;
  transform: scale(1.1);
}

.navbar-toggler i {
  font-size: 24px;
  color: #F1634C;
  transition: transform 0.3s ease-in-out;
}

.navbar-toggler i.fa-xmark {
  transform: rotate(180deg);
}

.content {
  margin-top: 40px;
  transition: margin-top 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.navbar-collapse.show + .content {
  margin-top: auto;
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

/* Animaciones de apertura/cierre del menú */
@keyframes slideDown {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px;
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    max-height: 500px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
}

.navbar-collapse.show {
  animation: slideDown 0.7s;
}

.navbar-collapse:not(.show) {
  animation: slideUp 0.7s;
}


</style>
