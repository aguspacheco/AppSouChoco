document.addEventListener("DOMContentLoaded", function () {
  const borrarBtn = document.getElementById("borrar-btn");
  const formulario = document.getElementById("pedido-form");

  borrarBtn.addEventListener("click", function () {
    formulario.reset();
  });
});
