const volverBtn = document.getElementById("volverBtn");
const resultadosPedido = document.getElementById("resultadosPedidos");
const contenidoVentana = document.getElementById("contenidoVentana");
const calculosPedidos = document.getElementById("calculosPedidos");
const simularBtn = document.getElementById("simularBtn");
const borrarBtn = document.getElementById("borrarBtn");

function ocultarResultados() {
  contenidoVentana.style.display = "none";
  resultadosPedido.innerHTML = "";
}

function mostrarSimulador() {
  calculosPedidos.style.display = "block";
  simularBtn.style.display = "inline-block";
  borrarBtn.style.display = "inline-block";
}

volverBtn.addEventListener("click", () => {
  ocultarResultados();
  mostrarSimulador();
});
