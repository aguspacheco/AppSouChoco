const envio = 900;

const valor_alfajor = 200;
const valor_budin = 300;
const valor_alfacookies = 400;
const valor_galleta = 500;
const valor_chocotorta = 600;
const valor_brownie = 700;

const calculos = document.getElementById("calculosPedidos");
const resultado = document.getElementById("resultadosPedidos");
const tablaResultado = document.getElementById("tablaSimulador");

function formato(monto) {
  return (
    "$" +
    monto.toLocalString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

function total(total, abonar) {
  const contenedor = document.getElementById(abonar);
  contenedor.innerHTML = formato(total);
}

function agregarFila(etiqueta, cantidad, tabla) {
  const fila = document.createElement("tr");
  fila.innerHTML = ` 
    <th class="texto-izquierda">${etiqueta}</th>
    <td>${formato(valor)}</td>
    <td>${formato(valor * cantidad)}</td>
    `;
  tabla.appendChild(fila);
}

function agregarFilaEnvio(envio, monto, tabla) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <th class="texto-izquierda">Envio<th>
    <td>${envio ? "SI" : "NO"}</td>
    <td>${formato(monto)}</td>
    `;
  tabla.appendChild(fila);
}

function obtenerValores() {
  const alfajores = parseInt(document.getElementById("alfajores").value) || 0;
  const budines = parseInt(document.getElementById("budines").value) || 0;
  const alfacookies = parseInt(document.getElementById("alfacookies").value) || 0;
  const galletas = parseInt(document.getElementById("galletas").value) || 0;
  const chocotorta = parseInt(document.getElementById("chocotorta").value) || 0;
  const brownies = parseInt(document.getElementById("brownies").value) || 0;

  if (
    alfajores < 0 ||
    budines < 0 ||
    alfacookies < 0 ||
    galletas < 0 ||
    chocotorta < 0 ||
    brownies < 0
  ) {
    alert("Por favor, ingrese valores mayores a cero");
    return null;
  }
  const envio = document.getElementById("envio").checked;

  return {
    alfajores,
    budines,
    alfacookies,
    galletas,
    chocotorta,
    brownies,
    envio,
  };
}

function calcularTotal({ alfajores, budines, alfacookies, galletas, chocotorta, brownies }) {
  let total =
    alfajores * valor_alfajor +
    budines * valor_budin +
    alfacookies * valor_alfacookies +
    galletas * valor_galleta +
    chocotorta * valor_chocotorta +
    brownies * valor_brownie;

  return total;
}

function calcularEnvio({ alfajores, budines, alfacookies, galletas, chocotorta, brownies }) {
  let total =
    alfajores * valor_alfajor +
    budines * valor_budin +
    alfacookies * valor_alfacookies +
    galletas * valor_galleta +
    chocotorta * valor_chocotorta +
    brownies * valor_brownie;

  return (total * envio) / 100;
}

function crearTablaPedido(valoresEntrada) {
  const { alfajores, budines, alfacookies, galletas, chocotorta, brownies } = valoresEntrada;

  agregarFila("Alfajores", alfajores, valor_alfajor, resultado);
  agregarFila("Budines", budines, valor_budin, resultado);
  agregarFila("alfacookies", alfacookies, valor_alfacookies, resultado);
  agregarFila("galletas", galletas, valor_galleta, resultado);
  agregarFila("chocotorta", chocotorta, valor_chocotorta, resultado);
  agregarFila("brownies", brownies, valor_brownie, resultado);

  const montoEnvio = envio
    ? totalEnvio(alfajores, budines, alfacookies, galletas, chocotorta, brownies)
    : 0;

  agregarFilaEnvio(envio, montoEnvio);
}

function mostrarTotal() {
  const valoresEntrada = obtenerValores();
  const total = calcularTotal(valoresEntrada);
  crearTablaPedido(valoresEntrada);
  verTotal(total, "abonarPedido");
}
