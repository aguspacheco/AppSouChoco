document.querySelectorAll(".toggle-submenu").forEach((toggle) => {
  const handleToggle = (event) => {
    event.preventDefault(); // Evita la acción predeterminada del enlace
    event.stopPropagation(); // Evita la propagación del evento

    const submenu = toggle.nextElementSibling;

    if (!submenu || !submenu.classList.contains("sub-dropdown")) return;

<<<<<<< HEAD
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
=======
    // Cierra todos los demás submenús antes de abrir el seleccionado
    document.querySelectorAll(".sub-dropdown").forEach((otherSubmenu) => {
      if (otherSubmenu !== submenu) {
        otherSubmenu.classList.remove("active");
        otherSubmenu.previousElementSibling.querySelector(".indicador").textContent = "+";
      }
    });

    // Alternar la clase active para mostrar u ocultar el submenú
    submenu.classList.toggle("active");

    // Cambiar el indicador de + a -
    const indicador = toggle.querySelector(".indicador");
    indicador.textContent = submenu.classList.contains("active") ? "-" : "+";
  });
>>>>>>> 6adf278aab6dbec2b56cbd68650441957aa221e6
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

document.getElementById("toggle-productos").addEventListener("click", function (event) {
  event.preventDefault();
  const dropdown = this.nextElementSibling;
  dropdown.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown");
  const toggleProductos = document.getElementById("toggle-productos");

  if (!toggleProductos.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});

function toggleMenu(event) {
  event.preventDefault();
  console.log("Evento detectado:", event.type);

  const dropdown = document.getElementById("toggle-productos").nextElementSibling;

  // Forzar la visibilidad
  dropdown.style.display = "block";
  dropdown.style.opacity = "1";
  dropdown.style.visibility = "visible";
  dropdown.style.position = "relative";
}

const toggleProductos = document.getElementById("toggle-productos");
toggleProductos.addEventListener("click", toggleMenu);
toggleProductos.addEventListener("pointerdown", toggleMenu);

document.addEventListener("click", function (event) {
  setTimeout(() => {
    const dropdown = document.querySelector(".dropdown");
    if (!event.target.closest(".dropdown-container")) {
      dropdown.style.display = "none";
    }
  }, 100); // Espera 100ms antes de cerrar
});
