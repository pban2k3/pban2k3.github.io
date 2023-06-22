var currentSlideIndex = 1;
var totalSlides = document.querySelectorAll('.slider .slide').length;
var autoSlide = setInterval(function() { nextSlide(); }, 4000);

showSlide(currentSlideIndex);

function showSlide(slideIndex) {
  var slides = document.querySelectorAll('.slider .slide');
  var thumbnails=document.querySelectorAll('.slider .thumbnail');

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove('active');
  }

  slides[slideIndex - 1].style.display = 'block';
  thumbnails[slideIndex - 1].classList.add('active');
}

function nextSlide() {
  currentSlideIndex === totalSlides ? currentSlideIndex = 1 : currentSlideIndex++;
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex === 1 ? currentSlideIndex = totalSlides : currentSlideIndex--;
  showSlide(currentSlideIndex);
}

function setSlide(slideIndex) {
  currentSlideIndex = slideIndex;
  showSlide(currentSlideIndex);
}

var slides = document.querySelectorAll('.slideshow-slide');
