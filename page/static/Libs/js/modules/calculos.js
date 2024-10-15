import { precios } from "./constantes.js";

/**
 * Calcula el total de los productos con sus precios.
 * @param {Object} valores - Cantidades de productos seleccionados.
 * @returns {number} - Total calculado de los productos.
 */
export function calcularTotal(valores) {
  return Object.keys(valores).reduce((total, producto) => {
    return total + (precios[producto] ? valores[producto] * precios[producto] : 0);
  }, 0);
}

/**
 * Monto numérico pasado a formato de moneda.
 * @param {number} monto - Monto a formatear.
 * @returns {string} - Monto formateado como cadena.
 */
export function formato(monto) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    currencyDisplay: "symbol",
  }).format(monto);
}

/**
 * Obtiene los valores ingresados en el simulador.
 * @returns {Object} - Objeto con las cantidades de productos.
 */
export function obtenerValores() {
  const productos = ["alfajores", "budin limon", "budin naranja", "alfacookies", "galletas"];
  const valores = {};
  productos.forEach((producto) => {
    valores[producto] = parseInt(document.getElementById(producto).value) || 0;
  });
  return valores;
}

/**
 * Agrega una fila a la tabla con el detalle del pedido.
 * @param {string} nombreProducto - Nombre del producto.
 * @param {number} cantidad - Cantidad del producto.
 * @param {number} valorUnitario - Precio de cada producto.
 * @param {HTMLTableElement} tabla - Elemento de tabla donde se agregará la fila.
 */
export function agregarFila(nombreProducto, cantidad, valorUnitario, tabla) {
  if (cantidad <= 0 || valorUnitario <= 0) return;
  const fila = `
    <tr>
      <td>${nombreProducto}</td>
      <td>${cantidad}</td>
      <td>${formato(valorUnitario)}</td>
      <td>${formato(cantidad * valorUnitario)}</td>
    </tr>
  `;
  tabla.insertAdjacentHTML("beforeend", fila);
}

/**
 * Crea una tabla con los detalles del pedido.
 * @param {Object} valores - Objeto con las cantidades de cada producto.
 * @param {number} total - Total del pedido sin incluir el envío.
 */
export function crearTablaPedido(valores, total) {
  const resultadosPedidos = document.getElementById("resultadosPedidos");
  resultadosPedidos.innerHTML = "";

  Object.keys(valores).forEach((producto) => {
    if (valores[producto] > 0) {
      agregarFila(
        producto.charAt(0).toUpperCase() + producto.slice(1),
        valores[producto],
        precios[producto],
        resultadosPedidos
      );
    }
  });

  // Actualizamos el monto total en la interfaz
  document.getElementById("monto").innerText = formato(total);
}
