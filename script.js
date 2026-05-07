const dolor = document.getElementById("dolor");
const valorDolor = document.getElementById("valorDolor");
const form = document.getElementById("formSalud");
const mensaje = document.getElementById("mensaje");

// Mostrar valor del range
dolor.addEventListener("input", () => {
  valorDolor.textContent = dolor.value;
});

// Mensaje al enviar
form.addEventListener("submit", (e) => {
  e.preventDefault();
  mensaje.textContent = "✅ Encuesta enviada correctamente";
});
