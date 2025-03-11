document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.getElementById('menu');
    const content = document.getElementById('content');
    const exitButton = document.getElementById('exit-button');
    const header = document.querySelector('.header');
    const body = document.body;

    hamburgerMenu.addEventListener('click', function() {
        menu.classList.toggle('show');
        content.classList.toggle('shifted');
        header.classList.toggle('menu-open'); // Toggle class on header
        body.classList.toggle('menu-open'); // Toggle class on body
    });

    exitButton.addEventListener('click', function() {
        menu.classList.remove('show');
        content.classList.remove('shifted');
        header.classList.remove('menu-open'); // Remove class from header
        body.classList.remove('menu-open'); // Remove class from body
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!hamburgerMenu.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('show');
            content.classList.remove('shifted');
            header.classList.remove('menu-open'); // Remove class from header
            body.classList.remove('menu-open'); // Remove class from body
        }
    });
});