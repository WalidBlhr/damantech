/* DamanTech — JS Principal */

// ---- Hero Slider ----
(function () {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current] && dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current] && dots[current].classList.add('active');
  }

  function autoplay() {
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(timer); goTo(i); autoplay(); }));
  autoplay();
})();

// ---- Tabs produits ----
(function () {
  const tabs = document.querySelectorAll('.cat-tab');
  const contents = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
})();

// ---- Hamburger menu ----
(function () {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => nav.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) nav.classList.remove('open');
  });
})();

// ---- Contact form ----
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.getElementById('form-message');
    if (msg) {
      msg.style.display = 'block';
      msg.textContent = 'Merci, votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.';
      msg.style.background = '#e6f4ea';
      msg.style.color = '#1d6b3a';
      msg.style.padding = '14px 18px';
      msg.style.borderRadius = '6px';
      msg.style.marginTop = '16px';
    }
    form.reset();
  });
})();

// ---- Scroll reveal simple ----
(function () {
  if (!window.IntersectionObserver) return;
  const els = document.querySelectorAll('.product-card, .service-card, .formation-card');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity .5s ease, transform .5s ease'; obs.observe(el); });
})();
