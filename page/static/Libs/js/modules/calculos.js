import { precios } from "./constantes.js";

/**
 * Calcula el total de los productos basados en sus valores y precios.
 * @param {Object} valores - Cantidades de productos seleccionados.
 * @returns {number} - Total calculado de los productos.
 */
export function calcularTotal(valores) {
  let total = 0;

  for (let producto in valores) {
    //Verifica si el producto existe en la lista de precios
    if (precios[producto]) {
      total += valores[producto] * precios[producto];
    }
  }
  return total;
}

/**
 * Retorna el costo fijo del envio
 * @returns {number} - Costo del envío.
 */
export function calcularEnvio() {
  return precios.envio;
}

/**
 * Da formato a un monto numérico en formato de moneda.
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
 * @returns {Object} - Objeto con los valores de los productos y si se seleccionó envío.
 */
export function obtenerValores() {
  return {
    alfajores: parseInt(document.getElementById("alfajores").value) || 0,
    budines: parseInt(document.getElementById("budines").value) || 0,
    alfacookies: parseInt(document.getElementById("alfacookies").value) || 0,
    galletas: parseInt(document.getElementById("galletas").value) || 0,
    envio: document.getElementById("envio").checked,
  };
}

/**
 * Agrega una fila a la tabla con el detalle del pedido.
 * @param {string} nombreProducto - Nombre del producto.
 * @param {number} cantidad - Cantidad del producto.
 * @param {number} valorUnitario - Precio unitario del producto.
 * @param {HTMLTableElement} tabla - Elemento de tabla donde se agregará la fila.
 */
export function agregarFila(nombreProducto, cantidad, valorUnitario, tabla) {
  if (!nombreProducto || cantidad <= 0 || valorUnitario <= 0) return;
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${nombreProducto}</td>
    <td>${cantidad}</td>
    <td>${formato(valorUnitario)}</td>
    <td>${formato(cantidad * valorUnitario)}</td>
  `;
  tabla.appendChild(fila);
}

/**
 * Crea una tabla con los detalles del pedido.
 * @param {Object} valores - Objeto con las cantidades de cada producto.
 * @param {number} total - Total del pedido sin incluir el envío.
 */
export function crearTablaPedido(valores, total) {
  const resultadosPedidos = document.getElementById("resultadosPedidos");
  resultadosPedidos.innerHTML = "";

  // Iteramos sobre cada producto y agregamos una fila si tiene una cantidad mayor a 0
  for (let producto in valores) {
    if (producto !== "envio" && valores[producto] > 0) {
      agregarFila(
        producto.charAt(0).toUpperCase() + producto.slice(1),
        valores[producto],
        precios[producto],
        resultadosPedidos
      );
    }
  }

  // Si el envío está seleccionado, lo calculamos y lo pone en la tabla
  if (valores.envio) {
    const montoEnvio = calcularEnvio();
    agregarFila("Envío", 1, montoEnvio, resultadosPedidos);
    total += montoEnvio;
  }

  // Actualizamos el monto total en la interfaz
  document.getElementById("monto").innerText = formato(total);
}
