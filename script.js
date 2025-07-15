// Toggle navigation menu on hamburger click
document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    const hamburger = document.getElementById('hamburger');
    
    nav.classList.toggle('active');          // Show/hide nav
    hamburger.classList.toggle('active');    // Animate hamburger
});
