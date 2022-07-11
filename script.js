'use strict';


const body = document.querySelector('body');
const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const titleBook = document.querySelectorAll('h2');
const googleBanner = document.querySelector('.adv');
const book2 = book[0].querySelectorAll('li');
const book5 = book[5].querySelectorAll('li');
const book6 = book[2].querySelectorAll('li');




book[0].before(book[1]);
book[2].remove();
book[3].before(book[4]);
books.append(book[2]);


body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

titleBook[4].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>';

googleBanner.remove();

book2[3].after(book2[6]);
book2[6].after(book2[8]);
book2[10].before(book2[2]);

book5[1].after(book5[9]);
book5[9].after(book5[3]);
book5[2].before(book5[4]);
book5[7].after(book5[5]);

const chapter8Book6 = document.createElement('li');
chapter8Book6.textContent = 'Глава 8: За пределами ES6';

book6[8].after(chapter8Book6);
