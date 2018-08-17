var xpos = 0;
var ypos = 0;
var square = document.getElementById("square");
var squareWidth = square.offsetWidth;
var squareHeight = square.offsetHeight;
var box = document.getElementById("box");
var boxWidth = box.offsetWidth;
var boxHeight = box.offsetHeight;
var t = setInterval(move, 1000);
document.write("Hi")
function move() {
  xpos = Math.floor(Math.random()*(200));
  ypos = Math.floor(Math.random()*(200));
  square.style.left = xpos+"px";
  square.style.top = ypos+"px";
}
