'use strict';


const body = document.querySelector('body');
const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const titleBook = document.querySelectorAll('h2');
const googleBanner = document.querySelector('.adv');
const ulBooksLi = document.querySelectorAll('li');
const ulBooks = document.querySelectorAll('ul');

console.log(book);
console.dir(ulBooks);
console.dir(ulBooksLi);

book[0].before(book[1]);
book[2].remove();
book[3].before(book[4]);
books.append(book[2]);

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

titleBook[4].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>';

googleBanner.remove();

ulBooksLi[4].before(ulBooksLi[6]);
ulBooksLi[4].before(ulBooksLi[8]);
ulBooksLi[48].before(ulBooksLi[55]);
ulBooksLi[50].after(ulBooksLi[48]);
ulBooksLi[53].after(ulBooksLi[51]);

const chapter8Book6 = document.createElement('li');
chapter8Book6.textContent = 'Глава 8: За пределами ES6';

ulBooks[2].append(chapter8Book6);
chapter8Book6.after(ulBooksLi[26]);
