const panels = document.querySelectorAll('.panel')

function removeActives() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}

panels.forEach(panel => {
  panel.addEventListener('click', e => {
    removeActives();
    panel.classList.add('active')
  })
})