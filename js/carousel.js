const prev_button = document.querySelector(".switchLeft");
const next_button = document.querySelector(".switchRight");

let currentSlide = 1;
const totalSlides = 3;

prev_button.addEventListener("click", (e) => {
    e.preventDefault();
    showSlide(currentSlide - 1);
});

next_button.addEventListener("click", (e) => {
    e.preventDefault();
    showSlide(currentSlide + 1);
});

function showSlide(slideNumber) {
    const slides = document.querySelectorAll('.carousel-series > div');
    if (slideNumber < 1) {
        slideNumber = totalSlides;
    } else if (slideNumber > totalSlides) {
        slideNumber = 1;
    }

    currentSlide = slideNumber;

    slides.forEach((slide, index) => {
        if (index + 1 === slideNumber) {
            slide.style.visibility = 'visible';
            slide.style.display = 'flex';
        } else {
            slide.style.visibility = 'hidden';
            slide.style.display = 'none';
        }
    });
    
}

// Inicialmente mostramos el primer slider y ocultamos los demás
document.querySelector('.slide1').style.visibility = 'visible';
document.querySelector('.slide1').style.display = 'flex';
document.querySelector('.slide2').style.visibility = 'hidden';
document.querySelector('.slide2').style.display = 'none';
document.querySelector('.slide3').style.visibility = 'hidden';
document.querySelector('.slide3').style.display = 'none';

// Barra de búsqueda - Menú derecho
const searchButton = document.querySelector('.btn_search');
const menuDerecho = document.querySelector('.menu-derecho');

