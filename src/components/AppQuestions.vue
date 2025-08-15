<template>
  <div class="faq-floating" role="region" aria-label="Preguntas Frecuentes">
    <button 
      class="faq-toggle" 
      @click="toggleFAQ" 
      aria-label="Abrir Preguntas Frecuentes" 
      data-aos="fade-up" 
      data-aos-delay="200"
    >
      <font-awesome-icon :icon="['fas', 'circle-question']" class="icon" aria-hidden="true" />
      Preguntas Frecuentes
      <font-awesome-icon :icon="['fas', 'question-circle']" class="icon-end" aria-hidden="true" />
    </button>

    <transition name="fade">
      <div v-if="showFAQ" class="faq-box" role="dialog" aria-label="Cuadro de Preguntas Frecuentes">
        <div class="faq-header">
          <h3>
            <font-awesome-icon :icon="['fas', 'circle-question']" class="header-icon" aria-hidden="true" />
            Información sobre tu servicio en Chancay
          </h3>
          <button 
            class="close-btn" 
            @click="toggleFAQ" 
            aria-label="Cerrar Preguntas Frecuentes"
          >
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </button>
        </div>
        <ul role="list">
          <li v-for="(faq, index) in faqs" :key="index" class="faq-item" role="listitem">
            <div 
              class="faq-question" 
              @click="toggleAnswer(index)" 
              :aria-expanded="faq.open" 
              :aria-controls="'faq-answer-' + index"
              role="button"
              tabindex="0"
              @keydown.enter="toggleAnswer(index)"
              @keydown.space="toggleAnswer(index)"
            >
              <font-awesome-icon :icon="['fas', faq.icon]" class="question-icon" aria-hidden="true" />
              <span>{{ faq.question }}</span>
              <font-awesome-icon 
                :icon="faq.open ? ['fas', 'chevron-up'] : ['fas', 'chevron-down']" 
                class="arrow" 
                aria-hidden="true"
              />
            </div>
            <transition name="expand">
              <p v-if="faq.open" class="faq-answer" :id="'faq-answer-' + index">{{ faq.answer }}</p>
            </transition>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'AppQuestions',
  data() {
    return {
      showFAQ: false,
      faqs: [
        { 
          question: "¿Qué hacer si mi internet en Chancay no funciona?", 
          answer: "Primero, reinicia tu router desenchufándolo por 30 segundos. Verifica que los cables estén bien conectados. Si el problema persiste, contáctanos al +51 924 076 526 para soporte técnico en Chancay.", 
          icon: "wifi", 
          open: false 
        },
        { 
          question: "¿Cuál es la diferencia entre 2.4 GHz y 5 GHz?", 
          answer: "La banda de 2.4 GHz ofrece mayor alcance, ideal para zonas amplias en Chancay, pero es más lenta. La de 5 GHz es más rápida, perfecta para streaming o gaming, pero con menor alcance. Ajusta tu router según tus necesidades.", 
          icon: "arrows-left-right-to-line", 
          open: false 
        },
        { 
          question: "¿Cómo mejorar mi señal de wifi en Chancay?", 
          answer: "Coloca el router en un lugar elevado y central, lejos de paredes o electrodomésticos. Evita interferencias de otros dispositivos. Si necesitas ayuda, NetSystems ofrece optimización de red en Chancay.", 
          icon: "signal", 
          open: false 
        },
        { 
          question: "¿Por qué mi internet no alcanza la velocidad contratada?", 
          answer: "Factores como interferencias, dispositivos conectados o configuración del router pueden afectar. Con nuestra fibra óptica en Chancay, garantizamos velocidades estables. Contáctanos para una revisión técnica gratuita.", 
          icon: "tachometer-alt", 
          open: false 
        }
      ]
    };
  },
  mounted() {
    AOS.init({
      duration: 600,
      once: true,
      mirror: false
    });
  },
  methods: {
    toggleFAQ() {
      this.showFAQ = !this.showFAQ;
    },
    toggleAnswer(index) {
      this.faqs[index].open = !this.faqs[index].open;
      this.faqs.forEach((faq, i) => {
        if (i !== index) faq.open = false;
      });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.faq-floating {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

.faq-toggle {
  background: #ffcc00;
  color: #1D63FF;
  border: none;
  padding: 12px 20px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1rem;
}

.faq-toggle:hover {
  background: #e6b800;
  transform: scale(1.1);
}

.faq-toggle .icon,
.faq-toggle .icon-end {
  color: #1D63FF;
  font-size: 1.1rem;
}

.faq-box {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  padding: 20px;
  width: 360px;
  max-height: 80vh;
  overflow-y: auto;
  position: absolute;
  bottom: 70px;
  right: 0;
  font-family: 'Poppins', sans-serif;
}

.faq-box ul {
  list-style: none;
  padding: 0;
}

.faq-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.faq-header h3 {
  color: #1D63FF;
  font-size: 1.2rem;
  font-weight: 600;
  flex-grow: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.header-icon {
  color: #ffcc00;
  font-size: 1.2rem;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: #1D63FF;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #e6b800;
}

.faq-item {
  margin-bottom: 10px;
  position: relative;
  padding-left: 32px;
}

.faq-item::before {
  content: '\f058'; /* Font Awesome: fa-circle-check */
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  color: #ffcc00;
  position: absolute;
  left: 8px;
  top: 18px;
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.faq-item:hover::before {
  transform: scale(1.2);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  cursor: pointer;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1rem;
}

.faq-question:hover {
  background: #e9ecef;
  transform: translateX(5px);
}

.question-icon {
  color: #ffcc00;
  margin-right: 12px;
  font-size: 1.1rem;
}

.faq-answer {
  padding: 12px;
  background: #fff3cd;
  border-radius: 10px;
  margin-top: 8px;
  font-size: 0.95rem;
  color: #333;
  line-height: 1.5;
}

.arrow {
  font-size: 1rem;
  color: #1D63FF;
  transition: transform 0.3s ease;
}





/* Responsive */
@media (max-width: 576px) {
  .faq-floating {
    bottom: 20px;
    right: 20px;
  }

  .faq-toggle {
    padding: 10px 16px;
    font-size: 0.9rem;
  }

  .faq-toggle .icon,
  .faq-toggle .icon-end {
    font-size: 1rem;
  }

  .faq-box {
    width: 300px;
    max-height: 70vh;
  }

  .faq-header h3 {
    font-size: 1rem;
  }

  .faq-item {
    padding-left: 28px;
  }

  .faq-item::before {
    font-size: 0.9rem;
    top: 16px;
  }

  .faq-question {
    font-size: 0.9rem;
    padding: 12px;
  }

  .faq-answer {
    font-size: 0.85rem;
  }
}
</style>