document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle-submenu");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();

      const submenu = toggle.nextElementSibling;
      const indicador = toggle.querySelector(".indicador");

      if (submenu && submenu.classList.contains("sub-dropdown")) {
        if (submenu.classList.contains("show")) {
          submenu.computedStyleMap.maxHeight = null;
        } else {
          submenu.computedStyleMap.maxHeight = submenu.scrollHeight + "px";
        }
        submenu.classList.toggle("show");

        if (indicador) {
          indicador.textContent = submenu.classList.contains("show") ? "-" : "+";
        }
      }
    });
  });
});
