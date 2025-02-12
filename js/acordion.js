// Seleccionar todos los botones de los acordeones
const accordions = document.querySelectorAll('.accordion-header');

// Añadir un evento de clic a cada acordeón
accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        // Al hacer clic, se alterna la clase 'active' en el acordeón padre
        const parent = accordion.parentElement;
        parent.classList.toggle('active');
    });
});
