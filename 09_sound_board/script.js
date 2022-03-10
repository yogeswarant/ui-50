const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
sounds.forEach(s => {
  let btn = document.createElement("button")
  btn.innerText = s
  btn.classList.add('btn')
  btn.addEventListener('click', () => {
    stopPlaying()
    document.getElementById(s).play()
  })
  document.getElementById('buttons').appendChild(btn)
})

function stopPlaying() {
  document.querySelectorAll('audio').forEach(a => {
    a.pause()
    a.currentTime = 0;
  })
}