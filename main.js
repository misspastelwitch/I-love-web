
let paper = document.querySelector('paperhover')
paper.addEventListener('paperhover', paperhoverHandler)
function paperhoverHandler(event) {
  if (event.mouseenter = true) {
  paper.classList.toggle('paperhover')
}
}
paper.addEventListener('animationend', paperhoverHandler)