
document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú Hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if(navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'var(--primary)';
                navLinks.style.padding = '20px';
                navLinks.style.textAlign = 'center';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }
        });
    }

    // 2. Intersection Observer para animaciones al hacer Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // El 15% del elemento debe ser visible para activarse
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase 'visible' para detonar el CSS
                entry.target.classList.add('visible');
                // Opcional: dejar de observar después de la primera vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Selecciona todos los elementos con la clase 'scroll-reveal'
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
});
