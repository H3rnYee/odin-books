const myLibrary = [];

const openDialogBtn = document.getElementById("openDialogBtn");
const dialog = document.getElementById("bookDialog");
const form = document.getElementById("bookForm");
const titleInput = document.getElementById("title");

function Book(title) {
  this.title = title;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title) {
  const newBook = new Book(title);
  myLibrary.push(newBook);
}

function displayBooks() {
  document.querySelectorAll(".book-card").forEach(card => card.remove());

  myLibrary.forEach(book => {
    const div = document.createElement("div");
    div.classList.add("book-card");
    div.textContent = `Title: ${book.title} | ID: ${book.id}`;
    document.body.appendChild(div);
    const removeButton = document.createElement('button');
    removeButton.textContent = `Remove Book`
    
    removeButton.addEventListener("click", () => {
        removeBook(book.id)
    })
    div.appendChild(removeButton);
    document.body.appendChild(div);
    function removeBook(id) {
        const index = myLibrary.findIndex(book => book.id === id);

        if (index !== -1) {
            myLibrary.splice(index, 1);
        }

        displayBooks();
        }
  });
}




openDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // 🚨 stops page reload

  const title = titleInput.value;

  addBookToLibrary(title);
  displayBooks();

  form.reset();     // clear input
  dialog.close();   // close dialog
});






