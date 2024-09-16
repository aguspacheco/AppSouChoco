const simuladorBtn = document.getElementById("simular-btn");
simuladorBtn.addEventListener("click", () => {
  const valoresEntrada = obtenerValores();

  if (valoresEntrada === null) {
    return;
  }

  calculosPedidos.style.display = "none";
  mostrarTotal();
});
