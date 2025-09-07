// Back to Top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Highlight menu khi cuộn
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("class");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.href.includes(current)) {
            link.classList.add("active");
        }
    });
});

// Fade-in hiệu ứng khi cuộn
const fadeElements = document.querySelectorAll(".section, .activities, .schedule, .participation");
function showOnScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
