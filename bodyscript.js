var xpos = 0;
var ypos = 0;
var square = document.getElementById("square");
var squareWidth = 10; /* pixels */
var squareHeight = 10; /* pixels */
var box = document.getElementById("box");
var boxWidth = 250; /* pixels */
var boxHeight = 250; /* pixels */
square.style.width = squareWidth+"px";
square.style.height = squareHeight+"px";
var t = setInterval(move, 1000);


function move() {
  square.style.width = squareWidth+"px";
  square.style.height = squareHeight+"px";
  xpos = Math.floor(Math.random()*(boxWidth - squareWidth + 1));
  ypos = Math.floor(Math.random()*(boxHeight - squareHeight + 1));
  square.style.left = xpos+"px";
  square.style.top = ypos+"px";
}
