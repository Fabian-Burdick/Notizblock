//buttons

function getNoteTamplate(indexNote) {
  return `<div class="notes-container">
    <div class="notesbuttons">
    <p>  ${notesTitle[indexNote]} -  ${notes[indexNote]}
    <div class="buttons">
    <button class="archivbutton" onclick="pushtoArchiv(${indexNote})"><img src="./assets/icons/archiv.png"></button>
    <button class="deletebutton" onclick="pushtoTrash(${indexNote})"><img src="./assets/icons/trash.png">
    </button>
    </p></div></div></div>`;
}

function getNoteTitleTamplate(indexNote) {
  return `<div class="notes-container">
    <div class="notesbuttons">
    <p>  ${notesTitle[indexNote]} -  ${notes[indexNote]}
    <div class="buttons">
    <button class="archivbutton" onclick="pushtoArchiv(${indexNote})"><img src="./assets/icons/archiv.png">
    </button>
    <button class="deletebutton" onclick="pushtoTrash(${indexNote})"><img src="./assets/icons/trash.png">
    </button>
    </p></div></div></div>`;
}

function getAtchivNoteTamplate(indexArchivNote) {
  return `<div class="notes-container">
    <div class="notesbuttons">${archivNotesTitles[indexArchivNote]} -  ${archivNotes[indexArchivNote]}
    <div class="buttons">
    <button class="archivbutton" onclick="pushtoNote(${indexArchivNote})"><img src="./assets/icons/notiz.png">
    </button>
    <button class="deletebutton" onclick="archivToTrash(${indexArchivNote})"><img src="./assets/icons/trash.png">
    </button>
    </div>`;
}

function getTrashNoteTamplate(indexTrashNote) {
  return `<div class="notes-container">
    <div class="notesbuttons">${trashNotesTitles[indexTrashNote]} -  ${trashNotes[indexTrashNote]}
    <div class="buttons">
    <button class="archivbutton" onclick="pushtoNote(${indexTrashNote})"><img src="./assets/icons/notiz.png">
    </button>
    <button class="archivbutton" onclick="pushtoArchiv(${indexTrashNote})"><img src="./assets/icons/archiv.png">
    </button>
    <button class="deletebutton" onclick="deleteNote(${indexTrashNote})"><p>X</p>
    </button>
    </div>`;
}
