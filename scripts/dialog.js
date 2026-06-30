const dialogRef = document.getElementById("my-dialog");

function opdenDialog() {
    dialogRef.showModal();
    dialogRef.classList.add("opened");
}

function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove("opened")
}