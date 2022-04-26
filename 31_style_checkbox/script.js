const checkboxes = document.querySelectorAll('.check-box')
const goodEl = document.getElementById('good')
const cheapEl = document.getElementById('cheap')
const fastEl = document.getElementById('fast')

function isGood() {
  return goodEl.classList.contains('checked')
}

function isCheap() {
  return cheapEl.classList.contains('checked')
}

function isFast() {
  return fastEl.classList.contains('checked')
}

function uncheckGood() {
  return goodEl.classList.remove('checked')
}

function uncheckCheap() {
  return cheapEl.classList.remove('checked')
}

function uncheckFast() {
  return fastEl.classList.remove('checked')
}


checkboxes.forEach((cb) => {
  cb.addEventListener('click', (e) => {

    let good = isGood()
    let cheap = isCheap()
    let fast = isFast()

    let target = e.target
    if (!e.target.classList.contains('check-box')) {
      target = e.target.parentNode;
    }
    target.classList.toggle('checked')
    if (target.id === 'good') {
      if (cheap && fast) {
        uncheckFast()
      }
    }
    if (target.id === 'fast') {
      if (good && cheap) {
        uncheckCheap()
      }
    }
    if (target.id === 'cheap') {
      if (good && fast) {
        uncheckGood()
      }
    }
  })
})
