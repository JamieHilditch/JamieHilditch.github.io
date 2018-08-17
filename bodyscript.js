var xpos = 0;
var ypos = 0;
var square = document.getElementById("square");
var t = setInterval(move, 1000);
function move() {
  xpos = Math.floor(Math.random()*200);
  ypos = Math.floor(Math.random()*200);
  square.style.left = xpos+"px";
  square.style.down = ypos+"px";
}
