const filled = document.querySelector('.filled')
const empties = document.querySelectorAll('.empty')

function dragStart(e) {
  console.log(e.target.dataset.index);
  console.log("dragStart");
  filled.classList.add('dragged')
}

function dragEnd(e) {
  console.log("dragEnd");
  filled.classList.remove('dragged')
}

function dragOver(e) {
  e.preventDefault()
  console.log(e.target.dataset.index);
  // console.log("dragOver");
}

function dragEnter(e) {
  e.preventDefault()
  console.log("DragEnter");
  console.log(e.target.dataset.index);
  if (!e.target.classList.contains('filled')) {
    e.target.classList.add('draghover')
  }
}

function dragLeave(e) {
  console.log("dragLeave");
  console.log(e.target.dataset.index);
  e.target.classList.remove('draghover')
}

function dragDrop(e) {
  console.log("dragDrop");
  console.log(e.target.dataset.index);
  e.target.appendChild(filled)
  e.target.classList.remove('draghover')
}

filled.addEventListener('dragstart', dragStart)
filled.addEventListener('dragend', dragEnd)
filled.addEventListener('drop', dragDrop)


for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('drop', dragDrop)
}