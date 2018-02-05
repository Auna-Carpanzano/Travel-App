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
}
