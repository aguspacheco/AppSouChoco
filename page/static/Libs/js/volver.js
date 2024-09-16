const volverBtn = document.getElementById("volverBtn");
volverBtn.addEventListener("click", () => {
  resultadosPedido.innerHTML = "";
  contenidoVentana.style.display = "none";
  calculosPedidos.style.display = "block";
  simularBtn.style.display = "inline-block";
  borrarBtn.style.display = "inline-block";
});
