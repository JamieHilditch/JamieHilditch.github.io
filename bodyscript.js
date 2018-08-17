var xpos = 0;
var ypos = 0;
var square = document.getElementById("square");
var t = setInterval(move, 1000);
function move() {
  xpos = Math.floor(Math.random()*201);
  ypos = Math.floor(Math.random()*201);
  square.style.left = xpos+"px";
  square.style.top = ypos+"px";
}
