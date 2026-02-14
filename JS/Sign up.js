// Control de pestañas (usuario / proveedor)
const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

const form = document.getElementById("registerForm");
const pass = document.getElementById("password");
const confirm = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  formMessage.style.display = "none"; // Ocultar mensaje previo
  pass.classList.remove("input-error");
  confirm.classList.remove("input-error");

  if (pass.value !== confirm.value) {
    confirm.classList.add("input-error");
    pass.classList.add("input-error");
    showMessage("⚠️ Las contraseñas no coinciden", "error");
    valid = false;
  } else if (!terms.checked) {
    showMessage("⚠️ Debes aceptar las políticas y términos", "error");
    valid = false;
  }

  if (valid) {
    showMessage("✅ Registro exitoso", "success");
    form.reset();
  }
});

// Función para mostrar mensajes
function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = "message " + type; // aplica clase success/error
  formMessage.style.display = "block";
}
