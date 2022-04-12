const nav = document.querySelector('.nav')

window.addEventListener('scroll', setScrolled)

function setScrolled(e) {
  console.log(window.scrollY > nav.offsetHeight + 120);
  if (window.scrollY > nav.offsetHeight + 120) {
    nav.firstElementChild.classList.add('scrolled')
  } else {
    nav.firstElementChild.classList.remove('scrolled')
  }
}