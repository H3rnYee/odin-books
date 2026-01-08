const myLibrary = [{"Book1":
    'Men'
}];

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

function displayBooks(myLibrary){
    for (let i = 0 ; i < myLibrary.length; i++){
        const newDiv = document.createElement('div');
        newDiv.textContent(i)
    }

} 
