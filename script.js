//DOM selectors
const booksList = document.querySelector('.books-list');
const bookName = document.querySelector('#name');
const bookAuthor = document.querySelector('#author');
const bookStatus = document.querySelector('#status');
const submitBtn = document.querySelector('#submit');

// library array
let myLibrary = [];

//Book obj constructor
function Book (name, author, status) {
    this.name = name
    this.author = author
    this.status = status
}

//create default data and add them to the library array
const defaltData = [
    {name : "The Lord of The Ring",
    author : "J.R.R Tolkien",
    status: "Read"}
];
defaltData.forEach(element => {
    myLibrary.push(element);
});

//functions
function displayBooks(book, index) {
    //create name div
    let nameDiv = document.createElement('div');
    nameDiv.textContent = book.name;
    //create author div
    let authorDiv = document.createElement('div');
    authorDiv.textContent = book.author;
    //create status div
    let statusDiv = document.createElement('div');
    statusDiv.textContent = book.status;
    //create unique delete button with id = index and click event
    let delBtn = document.createElement('button');
    delBtn.classList.add('delete-btn');
    delBtn.textContent = "DELETE";
    delBtn.id = index;
    delBtn.addEventListener('click', function() {
        myLibrary.splice(delBtn.id, 1);
        emptyLibrary();
        showLibrary();
    });
    //create book-row div
    let bookRowDiv = document.createElement('div');
    bookRowDiv.classList.add('book-row');
    bookRowDiv.appendChild(nameDiv);
    bookRowDiv.appendChild(authorDiv);
    bookRowDiv.appendChild(statusDiv);
    bookRowDiv.appendChild(delBtn);
    //add book-row to books-list
    booksList.appendChild(bookRowDiv);
}

//loop through myLibrary and display each element
function showLibrary () {
    myLibrary.forEach(element => {
        displayBooks(element, myLibrary.indexOf(element));
    });
}

//empty the books-list div
function emptyLibrary() {
    while (booksList.firstChild) {
        booksList.removeChild(booksList.lastChild);
    }
}

// main script ===================================================

showLibrary();

submitBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
    event.preventDefault();
    let bookStatusTxt = "Read";
    if(bookStatus.value === "0") bookStatusTxt = "Not read"; 
    book = new Book(bookName.value, bookAuthor.value, bookStatusTxt);
    myLibrary.push(book);

    emptyLibrary();
    showLibrary();
}