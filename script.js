document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the event from bubbling up the DOM tree
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the event from bubbling up the DOM tree
    });

    document.addEventListener('click', function() {
        menuIcon.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
