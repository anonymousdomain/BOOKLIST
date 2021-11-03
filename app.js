//Book class:represent a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class:handle ui tasks 
class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: "book one",
                author: "dawit",
                isbn: "1234"
            },
            {
                title: "book Two",
                author: "nahom",
                isbn: "5678"
            }

        ];

        const books = storedBooks;
        books.forEach((book) => UI.addBookToList(book));

    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row =  document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }
}


// store class:handels a storage


// event:display books
document.addEventListener('DOMContentLoaded',UI.displayBooks);

//event:add a book
document.querySelector('#book-form').addEventListener('submit',
(e)=>{
    e.preventDefault();

    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const isbn=document.querySelector('#isbn').value;
    
    const book=new Book(title,author,isbn);

    // add book to UI
    UI.addBookToList(book);
})

// event remove a book