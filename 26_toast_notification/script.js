const btn = document.querySelector('.btn')
const toasts = document.querySelector('.toasts')

btn.addEventListener('click', showNotification)

function getRandomMessage() {
  const messages = [
    'Lorem ipsum dolor sit.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet consectetur.',
    'Lorem, ipsum. '
  ]
  return messages[Math.floor(Math.random() *  messages.length)]
}

function getRandomType() {
  const types = [
    'success', 'error', 'info'
  ]
  return types[Math.floor(Math.random() *  types.length)]
}

function showNotification() {
  const toast = document.createElement('div')
  toast.classList.add('toast')
  toast.classList.add(getRandomType())
  toast.innerText = getRandomMessage()
  toasts.appendChild(toast)
  setTimeout(() => {
    toast.remove()
  }, 3000)
}