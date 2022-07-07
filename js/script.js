'use strict';

const projectName = document.getElementsByTagName('h1')[0].textContent;
const button = document.getElementsByClassName('handler_btn');
const buttonPlus = document.querySelector('.screen-btn');
const itemsPercent = document.querySelectorAll('.other-items.percent');
const itemsNumber = document.querySelectorAll('.other-items.number');
const rollbackInput  = document.querySelector('.rollback > .main-controls__range > [type="range"]');
const rollbackSpan  = document.querySelector('.rollback > .main-controls__range > .range-value');
const totalInput = document.getElementsByClassName('total-input');
let screenBlock = document.querySelectorAll('.screen');

console.log(projectName);
console.log(button[0]);
console.log(button[1]);
console.log(buttonPlus);
console.log(itemsPercent);
console.log(itemsNumber);
console.log(rollbackInput);
console.log(rollbackSpan);

for (let i in totalInput) {
  console.log(totalInput[i]);
}

console.log(screenBlock);

// const appData = {
//   title: '',
//   screens: [],
//   screenPrice: 0,
//   adaptive: true,
//   rollback: 35,
//   allServicePrice: 0,
//   fullPrice: 0,
//   servicePercentPrice: 0,
//   services: [],
// /* проверки */
//   isNumber: function(num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
//   },


//   asking: function() {

//     do {
//       appData.title = prompt('Как называется ваш проект?');
//     } while (appData.isNumber(appData.title));

//     for (let i = 0; i < 2; i++) {
//       let name;
//       let price = 0;

//       do {
//         name = prompt('Какие типы экранов нужно разработать?');
//       } while (appData.isNumber(name));

//       do {
//         price = prompt('Сколько будет стоить данная работа?');
//       } while (!appData.isNumber(price));
//       price = +price;

//       appData.screens.push({id: i, name: name, price: price});

//     }
    
//     for (let i = 0; i < 2; i++) {
//       let name;
//       let untilsum = 0;

//       do {
//         name = prompt('Какой дополнительный тип услуги нужен?');
//       } while (appData.isNumber(name));
      
//       do {
//         untilsum = prompt('Сколько это будет стоить?');
//       } while (!appData.isNumber(untilsum));
//       untilsum = +untilsum;
  
//       appData.services.push({id: i, name: name, untilsum: untilsum});
//     }
    
//     appData.adaptive = confirm('Нужен ли адаптив на сайте?');
//   },

//   addPrices: function() {
//     appData.screenPrice = appData.screens.reduce(function(sum, price) {
//       return sum + price.price;
//     }, 0);

//     appData.allServicePrice = appData.services.reduce(function(sum, untilsum) {
//       return sum + untilsum.untilsum;
//     }, 0);

// /*     for(let key in appData.services) {
//       appData.allServicePrice += appData.services[key];
//     } */
//   },

//   getFullPrice: function() {
//     appData.fullPrice = appData.screenPrice + appData.allServicePrice;
//     appData.fullPrice = appData.fullPrice;
//   },
//   getTitle: function(str) {
//     str = str.trim();
//     appData.title =  str[0].toUpperCase() + str.slice(1);
//   },
//   getServicePercentPrices: function() {
//     appData.servicePercentPrice =  Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100)));
//   },
//   getRollbackMessage: function(price) {
//     switch (true) {
//       case price >= 30000:
//         return "Даем скидку в 10%";
//       case 15000 <= price:
//         return "Даем скидку в 5%";
//       case 0 < price:
//         return "Скидка не предусмотрена";
//       default:
//         return "Что то пошло не так";
//     }
//   },

//   logger: function() {
// /*     for (let key in appData) {
//       console.log(key + ": " + appData[key]);
//     } */

//     console.log(appData.fullPrice);
//     console.log(appData.servicePercentPrice);
//     console.log(appData.screens);
//     console.log(appData.services);
//   },
//   start: function() {
//     appData.asking();
//     appData.addPrices();
//     appData.getFullPrice();
//     appData.getTitle(appData.title);
//     appData.getServicePercentPrices();
//     appData.logger();
//   }
// };


// appData.start();

