// Get the hamburger icon and navigation
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

// Toggle the menu when hamburger is clicked
hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
});
