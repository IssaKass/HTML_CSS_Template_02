const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.nav');
const links = document.querySelectorAll('.nav a');

console.log(links);

menuToggle.addEventListener('click', function () {
    this.classList.toggle('clicked-menu');
    navbar.classList.toggle('opened-navbar');
});

links.forEach(clickLink);

function clickLink(link) {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('opened-navbar')) {
            menuToggle.classList.remove('clicked-menu');
            navbar.classList.remove('opened-navbar');
        }
    })
}