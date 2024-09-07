/* burger menu */
document.getElementById('burger-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
}); 

/* button prev and next active */
var slideIndex = 1;
showSlides(slideIndex);

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

/* infinite slide  */
document.addEventListener("DOMContentLoaded", function() {
    var sliders = document.querySelectorAll(".custom-slider");

    sliders.forEach(function(slider, index) {
        var images = slider.querySelectorAll(".slide-image");

        function showImagesWithAnimation(imageIndex) {
            images[imageIndex].classList.add("fade");
            images[imageIndex].addEventListener("animationend", function() {
                images[imageIndex].classList.remove("fade");
                
            }, { once: true }); 
        }
        showImagesWithAnimation(0);
        setInterval(showNextImage, 2000);
    });
   });