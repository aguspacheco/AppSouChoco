document.querySelectorAll(".toggle-submenu").forEach((toggle) => {
  let isTouch = false; // Flag para controlar el evento touch

  const handleToggle = (event) => {
    if (isTouch) return; // Si ya se manejó un evento touch, no hacer nada
    event.preventDefault();
    event.stopPropagation();

    let submenu = toggle.nextElementSibling;

    if (!submenu || !submenu.classList.contains("sub-dropdown")) {
      submenu = toggle.parentElement.querySelector(".sub-dropdown");
    }

    if (!submenu) return;

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

    submenu.classList.toggle("active");
    const indicador = toggle.querySelector(".indicador");
    if (indicador) {
      indicador.textContent = submenu.classList.contains("active") ? "-" : "+";
    }
  };

  toggle.addEventListener("click", handleToggle);
  toggle.addEventListener("touchstart", (event) => {
    isTouch = true; // Establecer el flag a true
    handleToggle(event);
    setTimeout(() => (isTouch = false), 300); // Restablecer el flag después de un tiempo
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const productosBtn = document.querySelector(".productos-btn");
  const productosDropdown = productosBtn.nextElementSibling;

  const subMenuButtons = document.querySelectorAll(".toggle-submenu:not(.productos-btn)");

  productosBtn.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
    productosDropdown.setAttribute("aria-hidden", isExpanded);
    productosDropdown.classList.toggle("active");

    const indicador = this.querySelector(".indicador");
    indicador.textContent = isExpanded ? "+" : "-";
  });

  subMenuButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      subMenuButtons.forEach((btn) => {
        if (btn !== button) {
          btn.setAttribute("aria-expanded", "false");
          btn.nextElementSibling.setAttribute("aria-hidden", "true");
          btn.nextElementSibling.classList.remove("active");
          btn.querySelector(".indicador").textContent = "+";
        }
      });

      const subMenu = this.nextElementSibling;
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      this.setAttribute("aria-expanded", !isExpanded);
      subMenu.setAttribute("aria-hidden", isExpanded);
      subMenu.classList.toggle("active");

      const indicador = this.querySelector(".indicador");
      indicador.textContent = isExpanded ? "+" : "-";
    });
  });
});
