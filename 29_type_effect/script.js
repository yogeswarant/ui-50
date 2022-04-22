const typingEl = document.querySelector('.typing')
const valueEl = document.querySelector('.value')
const cursorEl = document.querySelector('.cursor')
const factorEl = document.getElementById('factor')
const typingValue = typingEl.dataset.value

let text = ''
let index = 0;
let factor = 1
let interval = 1000/factor
let show = true;

let cursorInterval;
let typeInterval;

function stop() {
  clearInterval(cursorInterval)
  clearInterval(typeInterval)
}

function start() {
  cursorInterval = setInterval(() => {
    if (show === true)  {
      cursorEl.style.opacity = 0
      show = false
    } else {
      cursorEl.style.opacity = 1
      show = true
    }
  }, interval/2)

  typeInterval = setInterval(() => {
    text += typingValue[index]
    valueEl.innerHTML = text
    index++
    if (index >= typingValue.length) {
      text = ''
      index = 0
    }
  }, interval)
}

factorEl.addEventListener('change', (e) => {
  factor = e.target.value;
  interval = 1000/factor
  stop()
  start()
})

start()