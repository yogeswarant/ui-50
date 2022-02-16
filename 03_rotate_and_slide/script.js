const menu = document.querySelector(".menu")
const page = document.querySelector(".page")

let tilted = false;
menu.addEventListener('click', () => {
  if (tilted) {
    page.classList.remove('tilt')
  }
  else {
    page.classList.add('tilt')
  }
  tilted = !tilted;
})