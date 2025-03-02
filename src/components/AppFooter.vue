<template>
  <!-- Footer -->
  <footer class="footer bg-dark text-light py-4">
    <div class="container text-center text-md-start">
      <div class="row">
        <!-- Contacto -->
        <div class="col-md-4 mb-3">
          <h5 class="text-uppercase">Contacto</h5>
          <p>
            <i class="bi bi-envelope me-2"></i>servitektechnologies@gmail.com
          </p>
          <p>
            <i class="bi bi-telephone me-2"></i>+51 924 076 526
          </p>
        </div>

        <!-- Redes Sociales -->
        <div class="col-md-4 mb-3 text-center">
          <h5 class="text-uppercase">Síguenos</h5>
          <div class="d-flex justify-content-center">
            <a href="#" class="btn btn-outline-light btn-sm rounded-circle mx-1">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="btn btn-outline-light btn-sm rounded-circle mx-1">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="btn btn-outline-light btn-sm rounded-circle mx-1">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="btn btn-outline-light btn-sm rounded-circle mx-1">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <!-- Derechos Reservados -->
        <div class="col-md-4 mb-3 text-center text-md-end">
          <h5 class="text-uppercase">&copy; 2024 Servitek Technologies</h5>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background-color: #343a40; /* Fondo oscuro */
  margin-top: 50px;
}

.footer h5 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}

.footer p {
  margin: 0;
  font-size: 14px;
}

.footer .btn-outline-light {
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: background-color 0.3s, color 0.3s;
}

.footer .btn-outline-light:hover {
  background-color: #0dcaf0; /* Azul claro */
  color: #fff;
  border-color: #0dcaf0;
}
</style>
