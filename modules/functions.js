export const checkListHeading = () => {
  if (!JSON.parse(localStorage.bookList).length) {
    document.querySelector('#list-heading').classList.add('dn');
    return;
  }
  document.querySelector('#list-heading').classList.remove('dn');
};
export const showBookList = (listOfBooks) => {
  checkListHeading(listOfBooks);
  if (!JSON.parse(localStorage.bookList).length) {
    return;
  }
  const books = JSON.parse(window.localStorage.bookList);
  books.forEach((book) => listOfBooks.addBook(book.title, book.author));
};