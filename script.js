'use strict';

let title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = +prompt('Сколько будет стоить данная работа?');
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');
let allServicePrice;
let fullPrice;
const rollback = 35;
let servicePercentPrice;


const getAllServicePrice = function() {
  return servicePrice1 + servicePrice2;

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



allServicePrice = getAllServicePrice();
fullPrice = getFullPrice();
title = getTitle(title);
servicePercentPrice = getServicePercentPrices();


console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(!!adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
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




