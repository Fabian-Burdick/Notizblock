//notizen anzeigen lassen array
let notesTitle = [];
let notes = [];

let trashNotesTitles = [];
let trashNotes = [];

let archivNotesTitles = [];
let archivNotes = [];

function renderAll() {
  renderTitleNotes();
  renderNotes();
  renderArchivNotes();
  renderTrashNotes();
}

//for-Schleifen render function

function renderNotes() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = '';

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTamplate(indexNote);
  }
}

function renderTitleNotes() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = '';

  for (let indexTitleNote = 0; indexTitleNote < notesTitle.length; indexTitleNote++) {
    contentRef.innerHTML += getNoteTitleTamplate(indexTitleNote);
  }
}

function renderArchivNotes() {
  let archivContentRef = document.getElementById('archiv-content');
  archivContentRef.innerHTML = '';

  for (let indexArchivNote = 0; indexArchivNote < archivNotes.length; indexArchivNote++) {
    archivContentRef.innerHTML += getAtchivNoteTamplate(indexArchivNote);
  }
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById('trash-content');
  trashContentRef.innerHTML = '';

  for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
    trashContentRef.innerHTML += getTrashNoteTamplate(indexTrashNote);
  }
}

function addNote() {
  let noteInputRef = document.getElementById('note-input');
  let noteInput = noteInputRef.value;

  notes.push(noteInput);

  renderNotes();

  noteInputRef.value = '';
}

function addTitle() {
  let titleInputRef = document.getElementById('title-input');
  let titleInput = titleInputRef.value;

  notesTitle.push(titleInput);

  renderTitleNotes();

  titleInputRef.value = '';
}

//push function

function pushtoTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote[0]);
  let trashNoteTitle = notesTitle.splice(indexNote, 1);
  trashNotesTitles.push(trashNoteTitle[0]);

  renderAll();
}

function pushtoArchiv(indexNote) {
  let archivNote = notes.splice(indexNote, 1);
  archivNotes.push(archivNote[0]);
  let archivNoteTitle = notesTitle.splice(indexNote, 1);
  archivNotesTitles.push(archivNoteTitle[0]);
  renderAll();
}

function archivToTrash(indexNote) {
  let trashNote = archivNotes.splice(indexNote, 1);
  trashNotes.push(trashNote[0]);

  let trashTitle = archivNotesTitles.splice(indexNote, 1);
  trashNotesTitles.push(trashTitle[0]);

  renderAll();
}

function pushtoNote(indexNote) {
  let archivedNote = archivNotes.splice(indexNote, 1);
  notes.push(archivedNote[0]);
  let archivedTitle = archivNotesTitles.splice(indexNote, 1);
  notesTitle.push(archivedTitle[0]);

  renderAll();
}

// delete notes

function deleteNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);

  renderAll();
}

function saveCart() {
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

const dialogRef = document.getElementById('my-dialog');

function opdenDialog() {
  dialogRef.showModal();
  dialogRef.classList.add('opened');
}

function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove('opened');
}
