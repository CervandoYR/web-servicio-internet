<template>
    <div class="faq-floating">
      <button class="faq-toggle" @click="toggleFAQ">
        <font-awesome-icon :icon="['fas', 'circle-question']" class="icon" />
        Preguntas Frecuentes
      </button>
  
      <transition name="fade">
        <div v-if="showFAQ" class="faq-box">
          <div class="faq-header">
            <h3>Información sobre tu servicio</h3>
            <button class="close-btn" @click="toggleFAQ">
              <font-awesome-icon :icon="['fas', 'xmark']" />
            </button>
          </div>
          <ul>
            <li v-for="(faq, index) in faqs" :key="index" class="faq-item">
              <div class="faq-question" @click="toggleAnswer(index)">
                <font-awesome-icon :icon="['fas', faq.icon]" class="question-icon" />
                <span>{{ faq.question }}</span>
                <font-awesome-icon :icon="faq.open ? ['fas', 'chevron-up'] : ['fas', 'chevron-down']" class="arrow" />
              </div>
              <transition name="expand">
                <p v-if="faq.open" class="faq-answer">{{ faq.answer }}</p>
              </transition>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showFAQ: false,
        faqs: [
          { 
            question: "No puedo navegar por internet, ¿Qué hago?", 
            answer: "Reinicia tu router y verifica la conexión.", 
            icon: "wifi", 
            open: false 
          },
          { 
            question: "Diferencias entre 2.4 GHz y 5 GHz", 
            answer: "2.4 GHz tiene mayor alcance, pero 5 GHz es más rápida.", 
            icon: "arrows-left-right-to-line",
            open: false 
          },
          { 
            question: "¿Cómo potenciar mi red Wi-Fi?", 
            answer: "Ubica el router en un lugar central y evita obstáculos.", 
            icon: "signal", 
            open: false 
          },
          { 
            question: "¿Por qué no alcanzo la velocidad contratada?", 
            answer: "Factores como interferencias afectan la velocidad.", 
            icon: "tachometer-alt", 
            open: false 
          }
        ]
      };
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
  .faq-floating {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  }
  
  .faq-toggle {
    background: #ff9800;
    color: white;
    border: none;
    padding: 12px 18px;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  
  .faq-toggle:hover {
    background: #e68900;
    transform: scale(1.05);
  }
  
  .faq-box {
    background: white;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    padding: 16px;
    width: 340px;
    position: absolute;
    bottom: 60px;
    right: 0;
  }
  
  .faq-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    text-align: center;
  }
  
  .faq-header h3 {
    color: #ff9800;
    font-size: 18px;
    flex-grow: 1;
    text-align: center;
  }
  
  .close-btn {
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  
  .faq-item {
    margin-bottom: 8px;
  }
  
  .faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    cursor: pointer;
    background: #fbe9e7;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .faq-question:hover {
    background: #ffccbc;
  }
  
  .question-icon {
    color: #ff9800;
    margin-right: 10px;
  }
  
  .faq-answer {
    padding: 10px;
    background: #ffecb3;
    border-radius: 8px;
    margin-top: 5px;
    font-size: 0.9rem;
    color: #333;
  }
  
  .arrow {
    font-size: 16px;
    transition: transform 0.3s ease;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  .expand-enter-active, .expand-leave-active {
    overflow: hidden;
  }
  
  .expand-enter, .expand-leave-to {
    max-height: 0;
    opacity: 0;
  }
  </style>
  