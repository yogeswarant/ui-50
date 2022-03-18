const textArea = document.getElementById('textarea')
textArea.focus()

textArea.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    let tags = textArea.value.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim())
    console.log(tags);
    displayTags(tags)
    textArea.value = ''
    spinSelection()
  }
})

function createTagEl(tag) {
  const tagEl = document.createElement('div')
  tagEl.classList.add('tag')
  tagEl.innerText = tag
  return tagEl
}

function displayTags(tags) {
  const tagsEl = document.getElementById('tags')
  tagsEl.innerHTML = ''
  tags.forEach(tag => {
    const tagEl = createTagEl(tag)
    tagsEl.appendChild(tagEl)
  })
}

function selectTag(tag) {
  tag.classList.add('selected')
}

function unselectTag(tag) {
  tag.classList.remove('selected')
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function spinSelection() {
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    console.log("Selecting", randomTag);
    selectTag(randomTag)

    setTimeout(() => {
      console.log("Unselecting", randomTag);
      unselectTag(randomTag)
    }, 300)
  }, 300)

  setTimeout(() => {
    console.log("Timeout");
    clearInterval(interval)
    finalSelection()
  }, 3000)
}

function finalSelection() {
  setTimeout(() => {
    selectTag(pickRandomTag())
  }, 500)
}