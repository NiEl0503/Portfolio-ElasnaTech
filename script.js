let hamburguer = document.getElementById('hamburguer');
let itensMenu = document.querySelector('.header-nav ul');

hamburguer.addEventListener('click', aparecer);

function aparecer() {
    itensMenu.classList.toggle('show');
}


const carousel = document.getElementById("myCarousel");
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");
let currentIndex = 0;

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showSlide(currentIndex);


