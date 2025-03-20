// Navbar Fixed 
window.onscroll = function() {
    const header = this.document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("hamburger-active");
});