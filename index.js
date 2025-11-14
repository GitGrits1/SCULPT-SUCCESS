// Collapsible sections
document.querySelectorAll(".collapsible").forEach(section => {
  const header = section.querySelector("h2");
  const arrow = header.querySelector(".toggle-btn");

  header.addEventListener("click", () => {
    section.classList.toggle("open");
    if (arrow) {
      arrow.textContent = section.classList.contains("open") ? "🔼" : "🔽";
    }
  });
});