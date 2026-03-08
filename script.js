// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isOpen = item.classList.contains('active');

        // Fecha todos os outros itens (opcional - para efeito sanfona)
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

        // Se o item não estava aberto, abre ele
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});

// Scroll Suave (Melhorado para considerar a altura do header fixo)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        const headerOffset = 80; // Altura aproximada do seu header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        // Fecha o menu mobile ao clicar em um link (se estiver aberto)
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Menu Mobile via Classe (Muito mais limpo)
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});