/* ============================
   PRADA AUTOELEVADORES — JS
   ============================ */

// ── Header scroll effect ──
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ── Mobile menu toggle ──
const menuToggle = document.getElementById("menuToggle");
const mobileNav  = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
});

// Close mobile nav when clicking a link
document.querySelectorAll(".mnav-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// ── FAQ accordion ──
document.querySelectorAll(".faq-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const content = btn.nextElementSibling;
    const isOpen = item.classList.contains("open");

    // Close all
    document.querySelectorAll(".faq-item").forEach(i => {
      i.classList.remove("open");
      i.querySelector(".faq-content").style.maxHeight = null;
    });

    // Open clicked (if it wasn't open)
    if (!isOpen) {
      item.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// ── Scroll reveal ──
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));