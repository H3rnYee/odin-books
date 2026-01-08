const myLibrary = [];

function Book(title) {
  // the constructor...
  this.title = title
  this.id = crypto.randomUUID()
}

function addBookToLibrary(item) {
  // take params, create a book then store it in the array
    newBook = new Book(title)
    myLibrary.push(newBook)
}
