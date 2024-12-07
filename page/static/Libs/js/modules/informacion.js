document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const openAnswer = document.querySelector(".faq-answer.show");
      if (openAnswer && openAnswer !== question.nextElementSibling) {
        openAnswer.classList.remove("show");
        openAnswer.previousElementSibling.classList.remove("active");
      }

      const answer = question.nextElementSibling;
      if (answer && answer.classList.contains("faq-answer")) {
        answer.classList.toggle("show");
        question.classList.toggle("active");
      }
    });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".faq-item").forEach((item) => observer.observe(item));

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
