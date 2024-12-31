document.querySelectorAll(".toggle-submenu").forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    const submenu = toggle.nextElementSibling;

    if (submenu.style.display === "block") {
      submenu.style.display = "none";
      toggle.querySelector(".indicador").textContent = "+";
    } else {
      submenu.style.display = "block";
      toggle.querySelector(".indicador").textContent = "-";
    }
  });
});

// Ocultar submenús al hacer clic fuera
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
