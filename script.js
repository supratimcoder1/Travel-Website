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

// Box Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Active Nav Link
const navItems = document.querySelectorAll('.nav-item');
const sectionElements = document.querySelectorAll('.section-list');

let currentSection = 'header';
window.addEventListener('scroll' , () => {
    sectionElements.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 85) {
            currentSection = section.id;
        }
    });


    navItems.forEach((navItem) => {
        if (navItem.href.includes(currentSection)) {
            navItem.classList.add('active');
        }
        else {
            navItem.classList.remove('active');
        }
    });
});