/* SCROLL ANIMATION */

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {
entry.target.classList.add("show")
}

})

})

const hiddenElements = document.querySelectorAll(".hero, .cta")

hiddenElements.forEach((el) => observer.observe(el))



/* MOBILE NAVIGATION */

const menuToggle = document.querySelector(".menu-toggle")
const navMenu = document.querySelector("nav")

if (menuToggle && navMenu) {

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("active")

})

}