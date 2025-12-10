// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("main-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Active link highlighting on scroll
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function onScroll() {
  const scrollPos = window.scrollY + 96;
  let currentId = "home";

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPos) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const id = href.replace("#", "");
    link.classList.toggle("is-active", id === currentId);
  });
}
window.addEventListener("scroll", onScroll);

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Fade-in scroll animations
const fadeEls = document.querySelectorAll(".fade-in-on-scroll");

if ("IntersectionObserver" in window && fadeEls.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeEls.forEach((el) => observer.observe(el));
} else {
  fadeEls.forEach((el) => el.classList.add("is-visible"));
}
