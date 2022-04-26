// Data Storage

const storage = (books) => localStorage.setItem('books', JSON.stringify(books));
export default storage;