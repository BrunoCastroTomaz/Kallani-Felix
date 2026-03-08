// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        
        // Fecha outros abertos
        document.querySelectorAll('.faq-answer').forEach(item => {
            if (item !== answer) item.style.display = 'none';
        });

        // Toggle atual
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menu Mobile Simples
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '70px';
    nav.style.left = '0';
    nav.style.width = '100%';
    nav.style.background = '#fff';
});