/**
 * Portfólio Evellyn - Script mínimo
 * Menu mobile e ano no footer
 */

(function () {
  'use strict';

  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');
  const yearEl = document.getElementById('year');

  // Ano no footer
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Abrir/fechar menu mobile
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('is-open');
      navMenu.classList.toggle('is-open');
      document.body.style.overflow = navMenu.classList.contains('is-open') ? 'hidden' : '';
    });

    // Fechar menu ao clicar em um link (navegação)
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('is-open');
        navMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }
})();
