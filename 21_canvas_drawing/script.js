const canvasEl = document.getElementById('canvas')
const decrementEl = document.getElementById('decrement')
const incrementEl = document.getElementById('increment')
const colorEl = document.getElementById('color')
const closeEl = document.getElementById('close')
const sizeEl = document.getElementById('size')
const ctx = canvasEl.getContext("2d")

let color = 'black'
let size = 5
let drawing = false
let x
let y

closeEl.addEventListener('click', (e) => {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
})

incrementEl.addEventListener('click', (e) => {
  size += 5
  if (size > 50) {
    size = 50
  }
  sizeEl.innerText = size
})

decrementEl.addEventListener('click', (e) => {
  size -= 5
  if (size < 5) {
    size = 5
  }
  sizeEl.innerText = size
})

document.addEventListener('mousedown', (e) => {
  drawing = true
  x = e.offsetX
  y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
  drawing = false
  x = undefined
  y = undefined
})

canvasEl.addEventListener('mousemove', (e) => {
  if (drawing) {
    drawCircle(e.offsetX, e.offsetY, size)
    drawLine(x, y, e.offsetX, e.offsetY)
    x = e.offsetX
    y = e.offsetY
  }
})

function drawCircle(x, y, size) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fill()
}

function drawLine(x, y, x1, y1) {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x1, y1)
  ctx.lineWidth = size * 2
  ctx.stroke()
}

