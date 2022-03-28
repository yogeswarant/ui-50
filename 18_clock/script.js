const digitalClockEl = document.querySelector('.digital-clock')
const dateEl = document.querySelector('.day-month')
const dayEl = document.querySelector('.datenum')
const secondsEl = document.querySelector('.needle.seconds')
const minutesEl = document.querySelector('.needle.minutes')
const hoursEl = document.querySelector('.needle.hours')
const modeEl = document.querySelector('.mode')

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function tick() {
  const now = new Date();
  setClock(now)
  setDigitalClock(now)
  setDate(now)
}

function setDigitalClock(now) {
  const hours = now.getHours()
  const minutes = now.getMinutes()
  digitalClockEl.innerHTML = `${hours}:${minutes > 9 ? minutes : "0" + minutes} ${hours > 12 ? 'PM' : 'AM'}`
}

function setClock(now) {
  secondsEl.style = `transform: rotate(${scale(now.getSeconds(), 0, 59, 1, 360)}deg);`
  minutesEl.style = `transform: rotate(${scale(now.getMinutes(), 0, 59, 1, 360)}deg);`
  hoursEl.style = `transform: rotate(${scale(now.getHours() % 12, 0, 12, 1, 360)}deg);`
}

function setDate(now) {
  dateEl.innerHTML = `${weekDays[now.getDay()]}, ${shortMonths[now.getMonth()]}`
  dayEl.innerHTML = now.getDate()
}

modeEl.addEventListener('click', e => {
  console.log("Set mode");
  let darkMode = document.querySelector('html').classList.toggle('dark')
  if (darkMode) {
    modeEl.innerHTML = 'Light mode'
  } else {
    modeEl.innerHTML = 'Dark mode'
  }
})

setInterval(tick, 1000)
