function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");

    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el);
});

let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.padding = "0.8rem 2rem";
    navbar.style.background = "rgba(15, 23, 42, 0.8)";
  } else {
    navbar.style.padding = "1rem 2rem";
    navbar.style.background = "rgba(255, 255, 255, 0.05)";
  }

  lastScroll = currentScroll;
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

const typingText = document.querySelector(".hero-content p");
if (typingText) {
  const originalText = typingText.textContent;
  typingText.textContent = "";
  let charIndex = 0;

  function typeWriter() {
    if (charIndex < originalText.length) {
      typingText.textContent += originalText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 50);
    }
  }

  // Start typing after page loads
  setTimeout(typeWriter, 1000);
}

const profileImg = document.querySelector(".profile-img");

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  if (profileImg && scrolled < window.innerHeight) {
    profileImg.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

document.querySelectorAll(".skill-item").forEach((skill, index) => {
  skill.style.animationDelay = `${index * 0.1}s`;
});

let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;

  requestAnimationFrame(animateCursor);
}

animateCursor();

window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

const footerYear = document.querySelector("footer p");
if (footerYear) {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = `© ${currentYear} Ahmad Mathlaul Falah. All Rights Reserved.`;
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  });
});

const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = "↑";
scrollTopBtn.className = "scroll-top-btn";
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.pointerEvents = "auto";
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.pointerEvents = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollTopBtn.addEventListener("mouseenter", () => {
  scrollTopBtn.style.transform = "scale(1.1) translateY(-5px)";
});

scrollTopBtn.addEventListener("mouseleave", () => {
  scrollTopBtn.style.transform = "scale(1) translateY(0)";
});
