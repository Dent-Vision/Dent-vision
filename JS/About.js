// ===== Lógica del menú hamburguesa =====
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    toggle.classList.toggle("active"); // activa animación ☰ -> ✖
  });

  // Cerrar menú al hacer clic en un enlace (mejor UX en móvil)
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
      toggle.classList.remove("active");
    });
  });
}

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