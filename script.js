const fadeElements = document.querySelectorAll(".fade-up");

function checkFade() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
