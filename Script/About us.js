// Scroll: highlight menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (scrollY >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Back to top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) backToTop.style.display = "block";
    else backToTop.style.display = "none";
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Gallery fade-in
const galleryItems = document.querySelectorAll(".gallery-item img");
galleryItems.forEach(img => {
    img.style.opacity = "0";
    img.style.transition = "opacity 1s ease";
    img.onload = () => { img.style.opacity = "1"; };
});
