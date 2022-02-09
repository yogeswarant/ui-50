let currentIndex = 0;
const progressItems = document.querySelectorAll('.progress-item')
const progressBar = document.querySelector('.progress-bar')
document.querySelector('#prev').addEventListener('click', prev)
document.querySelector('#next').addEventListener('click', next)


function next() {
  if (currentIndex < progressItems.length - 1) {
    currentIndex += 1
    updateProgress()
    updateButtons()
  }
}

function prev() {
  if (currentIndex > 0) {
    currentIndex -= 1
    updateProgress()
    updateButtons()
  }
}

function updateProgress() {
  // update progress bar
  let percentage = (currentIndex / (progressItems.length - 1)) * 100;
  progressBar.style.width = percentage + '%';

  // update progress item
  progressItems.forEach((progressItem, idx) => {
    if (idx <= currentIndex) {
      progressItem.classList.add('completed')
    } else {
      progressItem.classList.remove('completed')
    }
  })
}

function updateButtons() {
  if (currentIndex > 0) {
    document.getElementById('prev').disabled = false;
  } else {
    document.getElementById('prev').disabled = true;
  }

  if (currentIndex == (progressItems.length - 1)) {
    document.getElementById('next').disabled = true;
  } else {
    document.getElementById('next').disabled = false;
  }
}