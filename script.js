const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    footer.classList.toggle('dark-mode');

    // Cambiar el texto del botón
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Oscuro';
    }
});