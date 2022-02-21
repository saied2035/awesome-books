import {DateTime} from './modules/luxon/src/luxon.js'
const date = document.querySelector('#date');
date.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)

