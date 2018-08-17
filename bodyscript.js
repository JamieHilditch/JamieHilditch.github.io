var xpos = 0;
var ypos = 0;
var square = document.getElementById("square");
var squareWidth = square.style.width;
var squareHeight = square.style.height;
var box = document.getElementById("box");
var boxWidth = box.style.width;
var boxHeight = box.style.height;
var t = setInterval(move, 1000);
function move() {
  xpos = Math.floor(Math.random()*(boxWidth - squareWidth + 1));
  ypos = Math.floor(Math.random()*(boxHeight - squareHeight + 1));
  square.style.left = xpos+"px";
  square.style.top = ypos+"px";
}
