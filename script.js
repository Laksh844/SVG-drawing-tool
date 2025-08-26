let svg = document.getElementById("drawingArea")
let drawing = false
let path

svg.addEventListener("mousedown", function(e) {
  drawing = true
  path = document.createElementNS("http://www.w3.org/2000/svg", "path")
  path.setAttribute("d", `M${e.offsetX},${e.offsetY}`)
  path.setAttribute("stroke", "blue")
  path.setAttribute("stroke-width", "2")
  path.setAttribute("fill", "none")
  svg.appendChild(path)
})

svg.addEventListener("mousemove", function(e) {
  if (drawing) {
    let d = path.getAttribute("d")
    path.setAttribute("d", d + ` L${e.offsetX},${e.offsetY}`)
  }
})

svg.addEventListener("mouseup", function() {
  drawing = false
})
