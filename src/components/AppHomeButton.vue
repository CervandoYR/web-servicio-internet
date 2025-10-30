<template>
  <div class="home-floating" role="region" aria-label="Volver al Inicio">
    <button
      class="home-toggle"
      @click="goToHome"
      aria-label="Volver a la página de inicio"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <i class="bi bi-house-fill icon" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'AppHomeButton',
  setup() {
    const router = useRouter();
    const route = useRoute();

    const goToHome = () => {
      // Emitir evento para cerrar el navbar
      document.dispatchEvent(new Event('close-navbar'));

      if (route.path !== '/') {
        router.push('/').then(() => {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
          });
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    return {
      goToHome,
    };
  },
  mounted() {
    AOS.init({
      duration: 600,
      once: true,
      mirror: false,
    });
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.home-floating {
  position: fixed;
  bottom: 40px;
  left: 40px;
  z-index: 1000;
}

.home-toggle {
  background: #ffcc00;
  color: #ffffff;
  border: none;
  padding: 18px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  width: 60px;
  height: 60px;
}

.home-toggle:hover {
  background: #144ed1;
  transform: scale(1.15);
}

.home-toggle .icon {
  font-size: 2rem;
  color: #000000;
}

/* Responsive */
@media (max-width: 576px) {
  .home-floating {
    bottom: 20px;
    left: 20px;
  }

  .home-toggle {
    padding: 14px;
    width: 50px;
    height: 50px;
  }

  .home-toggle .icon {
    font-size: 1.5rem;
  }
}
</style>