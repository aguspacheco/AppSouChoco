import { obtenerValores, crearTablaPedido, calcularTotal } from "../modules/calculos.js";

export function inicializarSimulador() {
  document.getElementById("simularBtn").addEventListener("click", () => {
    const valores = obtenerValores();
    const total = calcularTotal(valores);

    const productosVacios =
      valores.alfajores === 0 &&
      valores.budines === 0 &&
      valores.alfacookies === 0 &&
      valores.galletas === 0;

    if (productosVacios && valores.envio) {
      alert("Por favor, ingrese al menos un valor para los productos.");
    } else if (total > 0) {
      crearTablaPedido(valores, total);
      document.getElementById("calculosPedidos").style.display = "none";
      document.getElementById("contenidoVentana").style.display = "block";
    } else {
      alert("Por favor, ingrese al menos un valor para simular.");
    }
  });
}

// Llama a inicializarSimulador para registrar el evento
inicializarSimulador();
