const addBtn = document.querySelector('.btn')
const containerEl = document.querySelector('.container')
const notesEl = document.querySelector('.notes')
const iEls = document.querySelectorAll('i')
let noteIndex = 0;
const localStorage = window.localStorage

function addNoteToLs(noteId, noteContent) {
  const notes = getNotesFromLs()
  console.log(("NOTES:", notes));
  for (let i = 0; i < notes.length; i++) {
    console.log("n", notes[i].name);
    console.log("i", noteId);
    if (notes[i].name === noteId) {
      notes[i].value = noteContent
      localStorage.setItem('notes', JSON.stringify(notes))
      return
    }
  }
  notes.push({"name": noteId, "value": noteContent})
  localStorage.setItem('notes', JSON.stringify(notes))
}

function getNotesFromLs() {
  const notesStr = localStorage.getItem('notes')
  console.log(notesStr);
  return JSON.parse(notesStr)
}

function getNoteContent(noteId) {
  const notes = getNotesFromLs()
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].name === noteId) {
      return notes[i].value
    }
  }
  return ''
}

function editNote(noteId) {
  const noteEl = document.getElementById(noteId)
  const nbEl = noteEl.querySelector('.note-body')
  const taEl = noteEl.querySelector('textarea')
  console.log(nbEl);
  nbEl.classList.toggle('edit')
  taEl.value = getNoteContent(noteId)
}

function deleteNote(noteId) {
  console.log(`Deleting note ${noteId}`);
}

function addNewNote(noteContent='') {
  console.log(`noteContent = ${noteContent}`);
  const noteEl = document.createElement('div')
  noteEl.classList.add('note')
  noteEl.id = `note-${noteIndex}`
  const noteInner = `
  <div class="note-header">
    <i class="fa-solid fa-pen-to-square edit"></i>
    <i class="fa-solid fa-trash-can delete"></i>
  </div>
  <div class="note-body edit">
    <textarea>${noteContent}</textarea>
    <div class="content">${marked.parse(noteContent)}</div>
  </div>`.trim()
  noteIndex++;
  noteEl.innerHTML = noteInner
  notesEl.appendChild(noteEl)
  noteEl.querySelector('.edit').addEventListener('click', (e) => {
    console.log("Edit Clicked");
    editNote(e.target.parentNode.parentNode.id)
  })

  noteEl.querySelector('.delete').addEventListener('click', (e) => {
    console.log("Delete Clicked");
    deleteNote(e.target.parentNode.parentNode.id)
  })

  noteEl.querySelector('textarea').addEventListener('input', (e) => {
    const noteId = e.target.parentNode.parentNode.id
    addNoteToLs(noteId, e.target.value)
    const contentEl = e.target.parentNode.querySelector('.content')
    contentEl.innerHTML = marked.parse(e.target.value)
  })

}

addBtn.addEventListener('click', (e) => {
  console.log('adding note');
  addNewNote()
})

function main() {
  const notes = getNotesFromLs()
  notes.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  for (let i = 0; i < notes.length; i++) {
    addNewNote(notes[i].value)
  }
}


main()