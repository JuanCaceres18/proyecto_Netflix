// Selección de los botones (DOM)
const prev_button = document.querySelector(".switchLeft");
const next_button = document.querySelector(".switchRight");

let currentSlide = 1; // Diapositiva actual
const totalSlides = 3; // Número total de diapositivas

// Eventos para los botones
prev_button.addEventListener("click", (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    showSlide(currentSlide - 1); // Muestra el slider anterior
});

next_button.addEventListener("click", (e) => {
    e.preventDefault();
    showSlide(currentSlide + 1); // Muestra el próximo slider
});

// Lógica para implementar el carrousel
function showSlide(slideNumber) {
    // Selecciono todos los sliders hijos de .carousel-series
    const slides = document.querySelectorAll('.carousel-series > div');
    // Validar el rango de sliders
    // Si el número del slider es menor a 1, mostramos el último slider
    if (slideNumber < 1) {
        slideNumber = totalSlides;
    } else if (slideNumber > totalSlides) { // Si el número del slider es mayor a 3, mostramos el primer slider
        slideNumber = 1;
    }

    // Actualizamos la variable currentSlide con el número del slider actual
    currentSlide = slideNumber;

    // Ajustar visibilidad y display de los sliders
    slides.forEach((slide, index) => {
        // Si el indice de la diapositiva coincide con el número del slider, se muestra
        if (index + 1 === slideNumber) {
            slide.style.visibility = 'visible';
            slide.style.display = 'flex';
        } else { // Si no coinciden, se oculta el slider
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



