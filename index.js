import * as navigation from './modules/navigation.js';
import { storage } from './modules/localstorage.js';
import * as showDate from './modules/Date.js';
import * as hide from './modules/hideComponent.js';

// Book class
// Select the Elements
const container = document.querySelector('.bookscontainer');
const addBtn = document.querySelector('form');
const titleI = document.querySelector('.title');
const authorI = document.querySelector('.author');

// Class of Books
class Books {
  static books = [];

  id = `${Date.now()}`.slice(-10);

  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook() {
    Books.books.push(this);
    storage(Books.books);
    Books.displayBook();
    titleI.value = '';
    authorI.value = '';
  }

  // Display Book
  static displayBook() {
    if (JSON.parse(localStorage.getItem('books'))) {
      Books.books = JSON.parse(localStorage.getItem('books'));
    }

    let list = '';
    Books.books.forEach((book) => {
      list += `
      <li class="book" id="${book.id}">
        <div class="book-details">"${book.title}" by ${book.author}</div>
        <button type="button" class="remove-btn">Remove</button>
      </li>
    `;
    });
    container.innerHTML = list;

    // Remove Book eventlistner
    document.querySelectorAll('.remove-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const targetId = e.target.parentElement.id;
        Books.books = Books.books.filter((book) => book.id !== targetId);
        storage(Books.books);
        e.target.parentElement.remove();
      });
    });
  }
}

let id;

// Add Book eventlistner
addBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  id = `${Date.now()}`.slice(-10);
  const title = titleI.value;
  const author = authorI.value;
  const newBook = new Books(id, title, author);
  newBook.addBook();
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});

// Reload function
window.onload = () => {
  Books.displayBook();
};
