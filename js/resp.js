// This is JavaScript code
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();


// This is JQuery code
$(document).ready(function () {
    $('.js').hide(1000);
    $('.js').show(500);
    $('.nav-list li a:ac').click(function () {
        CSS("border-bottom:", "2px solid navy")
    });
    burger = document.querySelector('.burger');
    navbar = document.querySelector('.navbar');
    navList = document.querySelector('.nav-list');
    rightNav = document.querySelector('.rightNav');

    burger.addEventListener('click', () => {
        rightNav.classList.toggle('v-class-resp');
        navList.classList.toggle('v-class-resp');
        navbar.classList.toggle('h-nav-resp');
    });
    
});