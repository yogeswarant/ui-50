const ripple = document.querySelector('.ripple')

const buttonEl = document.querySelector('button')

const timer = document.querySelector('.timer')
const totalSeconds = 3
let remainingSeconds = totalSeconds

buttonEl.addEventListener('click', function (e) {
  const x = e.clientX
  const y = e.clientY
  const btop = e.target.offsetTop
  const bleft = e.target.offsetLeft
  console.log(x, y)
  console.log(bleft, btop);
  const spanEl = document.createElement('span')
  spanEl.classList.add('ripple')
  spanEl.style.left = (x - bleft) + 'px'
  spanEl.style.top = (y - btop) + 'px'
  console.log(spanEl.style.left);
  console.log(spanEl.style.top);
  buttonEl.appendChild(spanEl)
  setTimeout(() => spanEl.remove(), 500)
})

let interval = setInterval(() => {
  timer.innerText = remainingSeconds
  remainingSeconds = remainingSeconds - 1
}, 1000)

setTimeout(() => {
  clearInterval(interval)
  timer.style.animationPlayState = 'paused'
  timer.style.opacity = 10
  timer.style.transform = 'scale(1)'
  timer.style.backgroundColor = 'red'
}, totalSeconds * 1000)




