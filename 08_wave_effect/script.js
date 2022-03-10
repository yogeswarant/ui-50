const labels = document.querySelectorAll('.form-input label')
const email = document.querySelector('#email')
const email_l = document.querySelector('#email_l')
const password = document.querySelector('#password')
const password_l = document.querySelector('#password_l')

labels.forEach((label, idx) => {
  label.innerHTML = label.innerText
  .split('')
  .map((l, idx) => `<span style="transition-delay: ${idx * 50}ms">${l}</span>`)
  .join('')
})


email.addEventListener('change', () => {
  if (email.value.length > 0) {
    email_l.hidden = true;
  } else {
    email_l.hidden = false;
  }
})

password.addEventListener('change', () => {
  console.log(password.value);
  if (password.value.length > 0) {
    password_l.hidden = true;
  } else {
    password_l.hidden = false;
  }
})