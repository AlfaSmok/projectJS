'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
const rollback = 35;

let allServicePrice;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;
let servicePrice1;
let servicePrice2;


const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
  title = prompt('Как называется ваш проект?');
  screens = prompt('Какие типы экранов нужно разработать?');

  /* screenPrice = prompt('Сколько будет стоить данная работа?'); */
  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice));
  screenPrice = +screenPrice;
  
  
  adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrice = function() {
  let sum = 0;
  
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
      do {
        servicePrice1 = prompt('Сколько это будет стоить?');
      } while (!isNumber(servicePrice1));
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
      do {
        servicePrice2 = prompt('Сколько это будет стоить?');
      } while (!isNumber(servicePrice2));
    }
    sum = Number(servicePrice1) + Number(servicePrice2);
  }

  return sum;
};

function getFullPrice() {
  fullPrice = screenPrice + allServicePrice;
  return fullPrice;
}

const getTitle = function(str) {
  str = str.trim();
  return str[0].toUpperCase() + str.slice(1);
};

const getServicePercentPrices = function() {
  return Math.ceil(fullPrice - (fullPrice * (rollback/100)));
};

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function(price) {
  switch (true) {
    case price >= 30000:
      return "Даем скидку в 10%";
    case 15000 <= price:
      return "Даем скидку в 5%";
    case 0 < price:
      return "Скидка не предусмотрена";
    default:
      return "Что то пошло не так";
  }
};


asking();
allServicePrice = getAllServicePrice();
fullPrice = getFullPrice();
title = getTitle(title);
servicePercentPrice = getServicePercentPrices();


console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(!!adaptive);
console.log(service1);
console.log(service2);
console.log(fullPrice);
console.log(allServicePrice);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);


console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase().split(", "));

console.log("Процент отката посреднику за работу " + (fullPrice * (rollback/100)));
console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));




