'use strict';


const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 35,
  allServicePrice: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  asking: function() {
    appData.title = prompt('Как называется ваш проект?');
    appData.screens = prompt('Какие типы экранов нужно разработать?');
  
    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!appData.isNumber(appData.screenPrice));
    appData.screenPrice = +appData.screenPrice;
    
    
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getAllServicePrice: function() {
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {
      let untilsum;
      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
      }
  
      do {
        untilsum = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(untilsum));
      sum += +untilsum;
    }
    return sum;
  },
  getFullPrice: function() {
    appData.fullPrice = appData.screenPrice + appData.allServicePrice;
    return appData.fullPrice;
  },
  getTitle: function(str) {
    str = str.trim();
    return str[0].toUpperCase() + str.slice(1);
  },
  getServicePercentPrices: function() {
    return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100)));
  },
  getRollbackMessage: function(price) {
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
  },

  logger: function() {
    for (let key in appData) {
      console.log(key + ": " + appData[key]);
    }
  },
  start: function() {
    appData.asking();
    appData.allServicePrice = appData.getAllServicePrice();
    appData.fullPrice = appData.getFullPrice();
    appData.title = appData.getTitle(appData.title);
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.logger();
  }
};


appData.start();











