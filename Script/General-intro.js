// Hiệu ứng hiện dần khi scroll
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
});
