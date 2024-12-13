
//let paper = document.querySelector('paperhover')
//paper.addEventListener('paperhover', paperhoverHandler)
//function paperhoverHandler(event) {
//  if (event.mouseenter = true) {
  //paper.classList.toggle('paperhover')
//}
//}
//paper.addEventListener('animationend', paperhoverHandler)

var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
 
var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);
canvas.width = 500;
canvas.height = 250;

var mouse = {x: 0, y: 0};
 
/* Mouse Capturing Work */
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);
console.log ('first 25 lines of JS are error-free')


/* Drawing on Paint App */
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = "#0a2472";

//ctx.strokeStyle = 
//ctx.strokeStyle = document.settings.colour[1].value;
 
canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};

console.log ('first 50 lines of JS are error-free')