const sBtn = document.querySelector(".search-btn")
const sInput = document.querySelector(".search-input")

let showInput = false;

sBtn.addEventListener('click', () => {
  showInput = !showInput;
  if (showInput) {
    sInput.classList.add("show")
    sInput.focus()
  } else {
    sInput.classList.remove("show")
  }
})