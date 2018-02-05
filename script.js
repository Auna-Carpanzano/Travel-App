var slider1 = document.getElementById("range1");
var output = document.getElementById("display1");
output.textContent = slider1.value;

slider1.oninput = function() {
    output.textContent = this.value;
}
