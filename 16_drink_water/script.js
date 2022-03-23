
function fillMain(index) {
  const filledPercentage = Number.parseInt(index) * 250 / 2000 * 100
  const remaining = document.querySelector('.remaining')
  const l2cup = document.querySelector('.l2')
  l2cup.style = `background-image: linear-gradient(to top,  rgb(34, 140, 226) 0%,  rgb(34, 140, 226) ${filledPercentage}%, white ${filledPercentage}%, white 100%); `
  remaining.innerHTML = `${2000 - (Number.parseInt(index) * 250)}ml`
}

function fillCup(index) {
  document.getElementById(index).classList.add('filled')
}

function clearCups() {
  document.querySelectorAll('.ml250').forEach((cupEl) => {
    cupEl.classList.remove('filled')
  })
}

function fillCupsUpto(index) {
  clearCups()
  for (let i = 1; i <= index; i++) {
    fillCup(i)
  }
  fillMain(index)
}

document.querySelectorAll('.ml250').forEach((cupEl) => {
  cupEl.addEventListener('click', (e) => {
    fillCupsUpto(cupEl.id)
  })
})