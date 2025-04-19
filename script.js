// Toggle navigation menu on hamburger click
document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
