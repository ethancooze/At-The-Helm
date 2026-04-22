// At The Helm — shared.js

// Fullscreen nav menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
});
// Close on link click
document.querySelectorAll('.nav-menu a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Nav hide on scroll down
const nav = document.querySelector('nav');
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y < 80) { nav.style.transform = 'translateY(0)'; nav.style.opacity = '1'; }
  else if (y > lastScrollY) { nav.style.transform = 'translateY(-100%)'; nav.style.opacity = '0'; }
  else { nav.style.transform = 'translateY(0)'; nav.style.opacity = '1'; }
  nav.classList.toggle('scrolled', y > 40);
  lastScrollY = y;
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sent ✓';
    btn.style.background = '#4ade80';
    btn.style.color = '#050508';
    btn.disabled = true;
  });
}

// v1776887761
