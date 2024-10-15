import { obtenerValores, crearTablaPedido, calcularTotal } from "../modules/calculos.js";

/**
 * Muesta y oculta elementos del DOM
 * @param {boolean} mostrarContenido - Si es true, muestra el contenido de la simulacion y si es false muestra la seccion de calculo
 */
function simular(mostrarContenido) {
  document.getElementById("calculosPedidos").style.display = mostrarContenido ? "none" : "block";
  document.getElementById("contenidoVentana").style.display = mostrarContenido ? "block" : "none";
}

export function inicializarSimulador() {
  document.getElementById("simularBtn").addEventListener("click", () => {
    const valores = obtenerValores();
    const total = calcularTotal(valores);

    const productosVacios = Object.values(valores).every((cantidad) => cantidad === 0);

    if (productosVacios) {
      alert("Por favor, ingrese al menos un valor para los productos.");
    } else if (total > 0) {
      crearTablaPedido(valores, total);
      simular(true);
    } else {
      alert("Por favor, ingrese al menos un valor para simular.");
    }
  });
}

// Llama a inicializarSimulador para registrar el evento
inicializarSimulador();
