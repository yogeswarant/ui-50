const text = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let loading = setInterval(blurEffect, 30);
let percentage = 0;

function blurEffect() {
  percentage++;
  if (percentage > 99) {
    clearInterval(loading)
  }
  text.innerHTML = `${percentage}%`
  bg.style.filter = `blur(${50 - (percentage/2)}px)`
  text.style.opacity = (100 - percentage) / 100
  console.log((100 - percentage) / 100)
}