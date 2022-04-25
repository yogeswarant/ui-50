const submitEl = document.querySelector('.submit')
const lengthEl = document.getElementById('pwdLength')
const ucEl = document.getElementById('uppercase')
const lcEl = document.getElementById('lowercase')
const nEl = document.getElementById('numbers')
const sEl = document.getElementById('symbols')
const gpwdEl = document.getElementById('gpwd')
const copyEl = document.querySelector('.copy')
const al = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nums = '0123456789'
const syms = '!@#$%^&*()_+=-{}|":;?><,./`~'

function copyToClipboard() {
  navigator.clipboard.writeText(gpwdEl.value)
  console.log("Copied");
}

function getUpperChar() {
  return al.charAt(Math.floor(Math.random() * al.length))
}

function getLowerChar() {
  return al.toLowerCase().charAt(Math.floor(Math.random() * al.length))
}

function getNum() {
  return nums.charAt(Math.floor(Math.random() * nums.length))
}

function getSym() {
  return syms.charAt(Math.floor(Math.random() * syms.length))
}


function generatePassword(length, uc, lc, num, sym) {
  let password = []
  let farray = []

  if (uc === true) {
    farray.push(getUpperChar)
  }

  if (lc === true) {
    farray.push(getLowerChar)
  }

  if (num === true) {
    farray.push(getNum)
  }

  if (sym === true) {
    farray.push(getSym)
  }

  for (let i=0; i < length; i++) {
    let rf = Math.floor(Math.random() * farray.length)
    console.log(rf);
    let f = farray[Math.floor(Math.random() * farray.length)]
    password.push(f())
  }
  return password
}

submitEl.addEventListener('click', (e) => {
  const length = lengthEl.value
  const pwd = generatePassword(parseInt(length), ucEl.checked, lcEl.checked, nEl.checked, sEl.checked);
  console.log(pwd);
  gpwdEl.value = pwd.join('')
})


copyEl.addEventListener('click', (e) => {
  copyToClipboard()
})