document.addEventListener("DOMContentLoaded", function () {
  const borrarBtn = document.getElementById("borrarBtn");
  const formulario = document.getElementById("pedido-form");

  borrarBtn.addEventListener("click", function () {
    formulario.reset();
  });
});
