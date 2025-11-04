// script.js - Funcionalidades JS para Blog Veterinaria
// Menú responsive y botones de compartir

document.addEventListener('DOMContentLoaded', function() {
    // Menú responsive
    const navToggle = document.getElementById('nav-toggle');
    const navUl = document.querySelector('nav ul');
    navToggle.addEventListener('click', function() {
        navUl.classList.toggle('open');
    });

    // Botones para compartir en redes sociales
    document.querySelectorAll('.share-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const url = window.location.href;
            const text = '¡Mira este avance del proyecto de veterinaria!';
            // Puedes personalizar las redes sociales aquí
            const shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            window.open(shareLink, '_blank');
        });
    });

    // Formulario de contacto (solo ejemplo, no envía datos)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! (Funcionalidad de envío pendiente)');
        });
    }

    // Botón flotante para volver arriba
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
