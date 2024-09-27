const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
let autoSlideInterval = null;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    carouselContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000);  // Cambia cada 3 segundos
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    resetAutoSlide();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    resetAutoSlide();
});

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

showSlide(currentIndex);
autoSlide();
