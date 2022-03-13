const keyValue = document.getElementById("keyValue")
const keyCodeValue = document.getElementById("keyCodeValue")
const codeValue = document.getElementById("codeValue")

window.addEventListener('keydown', (event) => {
  keyValue.innerText = event.key
  keyCodeValue.innerText = event.keyCode
  codeValue.innerText = event.code
})
