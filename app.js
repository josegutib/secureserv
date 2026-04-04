// ===== NÚMERO WHATSAPP (un solo lugar para editar) =====
const WA_NUMBER = '5491134232442';
const WA_DEFAULT_MSG = 'Hola, quiero una asesoría sobre seguridad perimetral';

function buildWaUrl(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

// ===== FORMULARIO DE CONTACTO =====
function sendWA() {
  const n = document.getElementById('nombre').value.trim() || '';
  const m = document.getElementById('mensaje').value.trim() || '';
  if (!n || !m) return;
  const txt = `Hola, soy ${n}. ${m}`;
  window.open(buildWaUrl(txt), '_blank');
}

document.getElementById('waForm').addEventListener('submit', function(e) {
  e.preventDefault();
  sendWA();
});

// ===== BOTÓN WHATSAPP CTA (sección "¿Tu sistema protege...?") =====
document.getElementById('waBtn').addEventListener('click', function(e) {
  e.preventDefault();
  window.open(buildWaUrl(WA_DEFAULT_MSG), '_blank');
});

// ===== BOTÓN WHATSAPP FLOTANTE =====
document.getElementById('waFloat').addEventListener('click', function(e) {
  e.preventDefault();
  window.open(buildWaUrl(WA_DEFAULT_MSG), '_blank');
});

// ===== MENÚ MÓVIL =====
document.getElementById('menuBtn').addEventListener('click', function() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
});

function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ===== ANIMACIONES AL HACER SCROLL =====
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .case-card').forEach(function(el, i) {
  el.style.transitionDelay = (i % 3) * 0.12 + 's';
  observer.observe(el);
});

// ===== NAVBAR: sombra al hacer scroll =====
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(255,59,47,0.15)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.07)';
  }
});