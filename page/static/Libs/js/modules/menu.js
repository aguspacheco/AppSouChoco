// Alternar submenús con comportamiento de abrir/cerrar al clic
document.querySelectorAll(".toggle-submenu").forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.preventDefault();

    // Selecciona el submenú asociado al botón clicado
    const submenu = toggle.nextElementSibling;

    // Cierra todos los demás submenús
    document.querySelectorAll(".sub-dropdown").forEach((otherSubmenu) => {
      if (otherSubmenu !== submenu) {
        otherSubmenu.style.display = "none";
      }
    });

    // Cambia el estado del submenú clicado (abrir o cerrar)
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
      toggle.querySelector(".indicador").textContent = "+"; // Actualiza el indicador
    } else {
      submenu.style.display = "block";
      toggle.querySelector(".indicador").textContent = "-"; // Actualiza el indicador
    }
  });
});

// Ocultar todos los submenús si se hace clic fuera del menú
document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown-container")) {
    document.querySelectorAll(".sub-dropdown").forEach((submenu) => {
      submenu.style.display = "none";
    });
    document.querySelectorAll(".indicador").forEach((indicador) => {
      indicador.textContent = "+";
    });
  }
});
