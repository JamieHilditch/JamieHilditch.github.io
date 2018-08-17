var xpos = 0;
var ypos = 0;
var square = document.getElementById("square");
var squareWidth = square.clientWidth;
var squareHeight = square.clientHeight;
var box = document.getElementById("box");
var boxWidth = box.clientWidth;
var boxHeight = box.clientHeight;
var t = setInterval(move, 1000);
alert(boxWidth);

function move() {
  xpos = Math.floor(Math.random()*(200));
  ypos = Math.floor(Math.random()*(200));
  square.style.left = xpos+"px";
  square.style.top = ypos+"px";
}
