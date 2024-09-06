function animarBarrasProgresso() {
    const barras = document.querySelectorAll('.progresso');
    barras.forEach(barra => {
        const width = barra.getAttribute('data-width');
        barra.style.width = width;
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animarBarrasProgresso();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('#habilidades'));


// Função para alternar o menu hambúrguer
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fecha o menu quando um link é clicado
navLinks.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
