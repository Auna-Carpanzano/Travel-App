// RANGE INPUT SLIDERS
var slider1 = document.getElementById("range1");
var output = document.getElementById("display1");
output.textContent = slider1.value;

slider1.oninput = function() {
    output.textContent = this.value;
}

//PHOTO SLIDESHOW
var slideIndex = 1;
