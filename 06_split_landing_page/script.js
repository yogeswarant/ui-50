const left = document.querySelector('.left')
const right = document.querySelector('.right')

left.addEventListener('mouseenter', () => {
  left.style.width = '75%'
  right.style.width = '25%'
  console.log("Entered left")
})

right.addEventListener('mouseenter', () => {
  right.style.width = '75%'
  left.style.width = '25%'
  console.log("Entered right")
})
