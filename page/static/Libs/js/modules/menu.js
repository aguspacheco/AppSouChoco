document.querySelectorAll(".toggle-submenu").forEach((toggle) => {
  const handleToggle = (event) => {
    event.preventDefault(); // Evita la acción predeterminada del enlace
    event.stopPropagation(); // Evita la propagación del evento

    const submenu = toggle.nextElementSibling;

    if (!submenu || !submenu.classList.contains("sub-dropdown")) return;

    // Cerrar otros submenús abiertos
    document.querySelectorAll(".sub-dropdown").forEach((otherSubmenu) => {
      if (otherSubmenu !== submenu) {
        otherSubmenu.classList.remove("active");
        const otherToggle = otherSubmenu.previousElementSibling;
        if (otherToggle) {
          const otherIndicador = otherToggle.querySelector(".indicador");
          if (otherIndicador) {
            otherIndicador.textContent = "+";
          }
        }
      }
    });

    // Alternar el submenú actual
    submenu.classList.toggle("active");
    const indicador = toggle.querySelector(".indicador");
    if (indicador) {
      indicador.textContent = submenu.classList.contains("active") ? "-" : "+";
    }
  };

  // Agregar eventos para click y touchstart
  toggle.addEventListener("click", handleToggle);
  toggle.addEventListener("touchstart", handleToggle);
});

// Cerrar submenús al hacer clic fuera del menú
document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown-container")) {
    document.querySelectorAll(".sub-dropdown").forEach((submenu) => {
      submenu.classList.remove("active");
    });
    document.querySelectorAll(".indicador").forEach((indicador) => {
      indicador.textContent = "+";
    });
  }
});
