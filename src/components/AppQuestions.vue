<template>
 <div class="faq-floating" role="region" aria-label="Preguntas Frecuentes">
    <button 
        class="faq-toggle" 
        @click="toggleFAQ" 
        aria-label="Abrir Preguntas Frecuentes" 
        data-aos="fade-up" 
        data-aos-delay="200"
    >
        <i class="bi bi-question-circle-fill icon" aria-hidden="true"></i>
    </button>

    <transition name="fade">
        <div v-if="showFAQ" class="faq-box" role="dialog" aria-label="Cuadro de Preguntas Frecuentes">
            <div class="faq-header">
                <h3>
                    <i class="bi bi-question-circle-fill header-icon" aria-hidden="true"></i>
                    Información sobre tu servicio en Chancay
                </h3>
                <button 
                    class="close-btn" 
                    @click="toggleFAQ" 
                    aria-label="Cerrar Preguntas Frecuentes"
                >
                    <i class="bi bi-x" aria-hidden="true"></i>
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
                        <i :class="'bi bi-' + faq.icon + ' question-icon'" aria-hidden="true"></i>
                        <span>{{ faq.question }}</span>
                        <i :class="faq.open ? 'bi bi-chevron-up arrow' : 'bi bi-chevron-down arrow'" aria-hidden="true"></i>
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
          icon: "arrow-left-right", 
          open: false 
        },
        { 
          question: "¿Cómo mejorar mi señal de wifi en Chancay?", 
          answer: "Coloca el router en un lugar elevado y central, lejos de paredes o electrodomésticos. Evita interferencias de otros dispositivos. Si necesitas ayuda, NetSystems ofrece optimización de red en Chancay.", 
          icon: "reception-4", 
          open: false 
        },
        { 
          question: "¿Por qué mi internet no alcanza la velocidad contratada?", 
          answer: "Factores como interferencias, dispositivos conectados o configuración del router pueden afectar. Con nuestra fibra óptica en Chancay, garantizamos velocidades estables. Contáctanos para una revisión técnica gratuita.", 
          icon: "speedometer2", 
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
    bottom: 40px;
    right: 40px;
    z-index: 1000;
}

.faq-toggle {
    background: #ffcc00;
    color: #1D63FF;
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

.faq-toggle:hover {
    background: #e6b800;
    transform: scale(1.15);
}

.faq-toggle .icon {
    color: #000000;
    font-size: 2rem; /* Larger icon */
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
    bottom: 80px;
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
    font-size: 1.4rem; /* Slightly larger for consistency */
}

.close-btn {
    background: transparent;
    border: none;
    font-size: 1.4rem; /* Larger close icon */
    color: #1D63FF;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close-btn:hover {
    color: #e6b800;
}

.faq-item {
    margin-bottom: 10px;
    padding-left: 32px;
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
    font-size: 1.3rem; /* Larger question icons */
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
    font-size: 1.2rem; /* Larger arrow icons */
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
        padding: 14px;
        width: 50px;
        height: 50px;
    }

    .faq-toggle .icon {
        font-size: 1.5rem; /* Smaller but still prominent in mobile */
    }

    .faq-box {
        width: 300px;
        max-height: 70vh;
        bottom: 70px;
    }

    .faq-header h3 {
        font-size: 1rem;
    }

    .header-icon {
        font-size: 1.2rem;
    }

    .close-btn {
        font-size: 1.2rem;
    }

    .faq-item {
        padding-left: 28px;
    }

    .faq-question {
        font-size: 0.9rem;
        padding: 12px;
    }

    .question-icon {
        font-size: 1.1rem;
    }

    .faq-answer {
        font-size: 0.85rem;
    }

    .arrow {
        font-size: 1rem;
    }
}
</style>