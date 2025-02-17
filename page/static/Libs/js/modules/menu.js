document.querySelectorAll(".toggle-submenu").forEach((toggle) => {
  // Función que maneja el evento de clic en un botón de submenú
  const handleToggle = (event) => {
    event.preventDefault(); // Evita la navegación
    event.stopPropagation(); // Evita la propagación del evento

    // Buscar el submenú asociado al botón clickeado
    let submenu = toggle.nextElementSibling;

    // Si el siguiente elemento no es un <ul>, buscar el submenú dentro del mismo <li>
    if (!submenu || !submenu.classList.contains("sub-dropdown")) {
      submenu = toggle.parentElement.querySelector(".sub-dropdown");
    }

    // Si no hay submenú, salir de la función
    if (!submenu) return;

    // Cerrar todos los otros submenús antes de abrir el actual
    document.querySelectorAll(".sub-dropdown").forEach((otherSubmenu) => {
      if (otherSubmenu !== submenu) {
        otherSubmenu.classList.remove("active"); // Cierra el submenú
        const otherToggle = otherSubmenu.previousElementSibling; // Encuentra el botón relacionado
        if (otherToggle) {
          const otherIndicador = otherToggle.querySelector(".indicador");
          if (otherIndicador) {
            otherIndicador.textContent = "+"; // Restaura el icono del indicador
          }
        }
      }
    });

    // Alternar el submenú actual (abrir o cerrar)
    submenu.classList.toggle("active");
    const indicador = toggle.querySelector(".indicador");
    if (indicador) {
      // Cambiar el indicador "+" o "-"
      indicador.textContent = submenu.classList.contains("active") ? "-" : "+";
    }
  };

  // Agregar eventos de clic y toque para activar los submenús
  toggle.addEventListener("click", handleToggle);
  toggle.addEventListener("touchstart", handleToggle);
});

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los botones que tienen la clase 'toggle-submenu'
  const toggleButtons = document.querySelectorAll(".toggle-submenu");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Encuentra el submenú correspondiente
      const submenu = this.nextElementSibling;

      // Alternar la visibilidad del submenú
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !isExpanded);
      submenu.setAttribute("aria-hidden", isExpanded);

      // Cambiar el indicador de + a - y viceversa
      const indicator = this.querySelector(".indicador");
      indicator.textContent = isExpanded ? "+" : "-";
    });
  });
});
