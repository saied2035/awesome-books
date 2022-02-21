import {DateTime} from './modules/luxon/src/luxon.js'
import BookList from './modules/Book-list.js'
import {bookAdd,bookRemove,displayWantedSection} from './modules/events.js'
import {showBookList} from './modules/functions.js'

const listOption = document.querySelector('#list');
const inputOption = document.querySelector('#add-new');
const contactOption = document.querySelector('#contact');
const listSection = document.querySelector('.booklist')
const inputSection = document.querySelector('.add_book')
const contactSection = document.querySelector('.contact')
const sections = [listSection,inputSection,contactSection]


listOption.addEventListener('click', (event) => displayWantedSection(event,sections));
inputOption.addEventListener('click', (event) => displayWantedSection(event,sections));
contactOption.addEventListener('click', (event) => displayWantedSection(event,sections));


const date = document.querySelector('#date');
date.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)




const listOfBooks = new BookList();

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => bookAdd(listOfBooks));

document.addEventListener('click', (event) => bookRemove(event,listOfBooks));

showBookList(listOfBooks)

