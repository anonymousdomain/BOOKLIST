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
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
    static showAlert(msg, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className} text-center`;
        div.appendChild(document.createTextNode(msg));
        // <div class="alert aler-name">msg</div>
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // make the validation disappear in 2 sec

        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }
}


// store class:handels a storage


// event:display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//event:add a book
document.querySelector('#book-form').addEventListener('submit',
    (e) => {
        e.preventDefault();

        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;

        if (title === '' || author === '' || isbn === '') {
            UI.showAlert("please fill all the fildes", 'danger')
        }
        else {
            const book = new Book(title, author, isbn);

            // add book to UI
            UI.addBookToList(book);
            UI.showAlert('new book add', 'success')
            //clear fileds 
            UI.clearFields();
        }

    });

// event remove a book
document.querySelector('#book-list').addEventListener('click',
    (e) => {

        UI.deleteBook(e.target);
        UI.showAlert('book is deleted from the list','danger')
    })

