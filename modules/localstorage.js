// Data Storage
/* eslint-disable import/prefer-default-export */
const storage = (books) => localStorage.setItem('books', JSON.stringify(books));
export { storage };