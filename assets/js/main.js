document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("mainNav");
  const overlay = document.getElementById("navOverlay");

  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
    overlay.classList.toggle("active");
    this.classList.toggle("is-active");
  });

  overlay.addEventListener("click", function () {
    nav.classList.remove("open");
    overlay.classList.remove("active");
    toggle.classList.remove("is-active");
  });
});
