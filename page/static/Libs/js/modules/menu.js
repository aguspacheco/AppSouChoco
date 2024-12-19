document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown > li > a");

  dropdowns.forEach((link) => {
    link.addEventListener("click", (e) => {
      const subDropdown = link.nextElementSibling;
      if (subDropdown && subDropdown.classList.contains("sub-dropdown")) {
        e.preventDefault();
        subDropdown.style.display = subDropdown.style.display === "block" ? "none" : "block";
      }
    });
  });
});
