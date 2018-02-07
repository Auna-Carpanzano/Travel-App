// RANGE INPUT SLIDERS
var slider1 = document.getElementById("range1");
var output = document.getElementById("display1");
output.textContent = slider1.value;

slider1.oninput = function() {
    output.textContent = this.value;
}

// PHOTO SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

// NEXT/PREV CONTROLS
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// THUMBNAIL IMAGE CONTROLS
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("photos__slides");
  var unselected = document.getElementsByClassName("unselected");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < unselected.length; i++) {
    unselected[i].className = unselected[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  unselected[slideIndex-1].className += " active";
}

//ASIDE TOGGLE DROPDOWNS
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
  });
}
