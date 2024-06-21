document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slider img');
    const navLinks = document.querySelectorAll('.slider-nav a');

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Stop the anchor from doing anything
            slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        });
    });
});

