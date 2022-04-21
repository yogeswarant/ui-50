const posterEl = document.querySelector('.poster')
const timesEl = document.getElementById('times')
let times = 1;
let clickCount = 0;
let prevClickTs = 0;

posterEl.addEventListener('click', (e) => {
  const now = Date.now()
  
  if (prevClickTs == 0) {
    prevClickTs = now;
    return
  }

  if ((now - prevClickTs) > 1000) {
    prevClickTs = now;
    return
  } else {
    prevClickTs = 0;
  }

  const likeEl = document.createElement('i')
  likeEl.classList.add('like')
  likeEl.classList.add('fa-solid')
  likeEl.classList.add('fa-heart')
  timesEl.innerHTML = times
  
  times++;
  likeEl.style.left = `${e.clientX - e.target.offsetLeft}px`
  likeEl.style.top = `${e.clientY - e.target.offsetTop}px`

  posterEl.appendChild(likeEl)
  setTimeout(() => {
    likeEl.remove()
  }, 3000)
})