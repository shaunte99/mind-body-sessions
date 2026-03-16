/* MOBILE NAVIGATION */
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav");

if(menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* FADE-IN ANIMATION */
const hiddenSections = document.querySelectorAll(".hero, .cta, .card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

hiddenSections.forEach(el => observer.observe(el));