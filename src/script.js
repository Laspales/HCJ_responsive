/* burger menu */
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');
burgerMenu.addEventListener('click', function (event) {
    event.stopPropagation();
    navLinks.classList.toggle('active');
});

document.addEventListener('click', function (event) {
    if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

/* slider infinite js */

var slideIndex = 1;
showSlides(slideIndex);

var autoSlideInterval = setInterval(function () {
    plusSlides(1);
}, 5000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("custom-slider");
    var dots = document.getElementsByClassName("dot");

    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(function () {
        plusSlides(1);
    }, 5000);

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
/* deplacer les blocs de formes */
function moveRandomlyWithinPerimeter(element, perimeter) {
    var x = Math.random() * perimeter;
    var y = Math.random() * perimeter;

    element.style.transform = "translate(" + x + "px, " + y + "px)";
}

var divs = document.querySelectorAll('.divrad');

divs.forEach(function (div) {
    moveRandomlyWithinPerimeter(div, 300);
});

setInterval(function () {
    divs.forEach(function (div) {
        moveRandomlyWithinPerimeter(div, 300);
        moveRandomlyWithinPerimeter(div, 300);
    });
}, 5000);