/* SCROLL ANIMATION */

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {
entry.target.classList.add("show")
}

})

})

const hiddenElements = document.querySelectorAll("section")

hiddenElements.forEach((el) => observer.observe(el))


/* MOBILE NAVIGATION */

const menuToggle = document.querySelector(".menu-toggle")
const navMenu = document.querySelector("nav")

if (menuToggle && navMenu) {

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("active")

})

}

/* FAQ ACCORDION */

/* PREMIUM ACCORDION – smooth + single open only */
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const header = item.querySelector('.faq-header');
  
  header.addEventListener('click', () => {
    // Close all others first (clean single-open experience)
    faqItems.forEach(other => {
      if (other !== item) other.classList.remove('active');
    });
    
    item.classList.toggle('active');
  });
});