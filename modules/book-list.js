class BookList {
  constructor() {
    this.bookList = [];
  }

  addBook(title = '', author = '') {
    const list = document.querySelector('.booklist');
    list.style.padding = '0';
    const li = document.createElement('li');
    li.className = 'book-item';
    li.style.margin = '0';
    const bookTitle = document.createElement('p');
    bookTitle.className = 'title';
    bookTitle.innerText = `"${title}" by`;
    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'author';
    bookAuthor.innerText = author;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove';
    removeBtn.innerText = 'Remove';
    li.appendChild(bookTitle);
    li.appendChild(bookAuthor);
    li.appendChild(removeBtn);
    list.appendChild(li);
    const book = { title, author };
    this.bookList.push(book);
    window.localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  removeBook(index) {
    this.bookList = this.bookList.filter((book, i) => this.bookList[index] !== this.bookList[i]);
    window.localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }
}

const listOfBooks = new BookList();

const bookAdd = (e) => {
  const title = document.querySelector('#book_title').value;
  const author = document.querySelector('#book_author').value;
  listOfBooks.addBook(title, author);
};