// Simple hover feedback (minimal UX enhancement)
const cards = document.querySelectorAll(".project-card, .skill-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.cursor = "pointer";
  });
});