// ===== Validación de formulario =====
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
      showMessage("⚠️ Por favor completa todos los campos.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      showMessage("⚠️ Ingresa un correo electrónico válido.", "error");
      return;
    }

    showMessage("✅ ¡Gracias por contactarnos! Te responderemos pronto.", "success");
    form.reset();
  });
}

function showMessage(text, type) {
  message.textContent = text;
  message.className = "message " + type;
  message.style.display = "block";

  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
}

// ===== Menú hamburguesa =====
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
  toggle.classList.toggle("active");
});

// --- Lógica de la barra de búsqueda ---
const searchInput = document.getElementById("search-input");
const searchBtn = document.querySelector(".search-btn");
const closeBtn = document.querySelector(".close-btn");

searchBtn.addEventListener("click", () => {
  searchInput.classList.add("active");
  closeBtn.style.display = "inline"; // mostrar botón cerrar
  searchBtn.style.display = "none"; // ocultar botón de búsqueda
  searchInput.focus();
});

closeBtn.addEventListener("click", () => {
  searchInput.classList.remove("active");
  searchInput.value = "";
  closeBtn.style.display = "none"; // ocultar botón cerrar
  searchBtn.style.display = "inline";
});