const boxes = document.querySelectorAll('.box')

function showBoxes() {
  
  boxes.forEach((box) => {
    console.log(box)
    console.log(box.getBoundingClientRect())
    console.log(window.innerHeight)

    if ((box.getBoundingClientRect().y + 100) < window.innerHeight) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}

showBoxes()

document.addEventListener('scroll', () => {
  showBoxes()
})