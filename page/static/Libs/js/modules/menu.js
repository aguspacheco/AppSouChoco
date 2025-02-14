// Selecciona todos los botones que abren submenús y les agrega eventos
document.querySelectorAll(".toggle-submenu").forEach((toggle) => {
  // Función que maneja el evento de clic en un botón de submenú
  const handleToggle = (event) => {
    event.preventDefault(); // Evita que el enlace navegue a otra página
    event.stopPropagation(); // Evita que el evento se propague a otros elementos

    const submenu = toggle.nextElementSibling; // Encuentra el submenú asociado

    // Si el submenú no existe o no tiene la clase correcta, salir de la función
    if (!submenu || !submenu.classList.contains("sub-dropdown")) return;

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

// Función para mostrar el menú principal de productos
function toggleMenu(event) {
  event.preventDefault(); // Evita que el enlace navegue
  console.log("Evento detectado:", event.type); // Mensaje en consola para depuración

  const dropdown = document.getElementById("toggle-productos").nextElementSibling;

  // Asegura que el menú sea visible cuando se activa
  dropdown.style.display = "block";
  dropdown.style.opacity = "1";
  dropdown.style.visibility = "visible";
  dropdown.style.position = "relative";
}

// Agregar eventos de clic a los submenús para evitar la propagación
document.querySelectorAll(".sub-dropdown a").forEach((submenuItem) => {
  submenuItem.addEventListener("click", (event) => {
    event.stopPropagation(); // Evita que el evento se propague hacia arriba
  });
});
