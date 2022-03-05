/* eslint-disable linebreak-style */
import './index.css'
import { DateTime } from 'luxon';
import BookList from './modules/BookList.js';
import { bookAdd, bookRemove, displayWantedSection } from './modules/events.js';
import { showBookList } from './modules/functions.js';

const listOption = document.querySelector('#list');
const inputOption = document.querySelector('#add-new');
const contactOption = document.querySelector('#contact');
const listSection = document.querySelector('.book-section');
const inputSection = document.querySelector('.add_book');
const contactSection = document.querySelector('.contact');
const sections = [listSection, inputSection, contactSection];

listOption.addEventListener('click', (event) => displayWantedSection(event, sections));
inputOption.addEventListener('click', (event) => displayWantedSection(event, sections));
contactOption.addEventListener('click', (event) => displayWantedSection(event, sections));

const date = document.querySelector('#date');
date.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

const listOfBooks = new BookList();

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => bookAdd(listOfBooks));

document.addEventListener('click', (event) => bookRemove(event, listOfBooks));

showBookList(listOfBooks);
