'use strict';

const projectName = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const rollbackInput  = document.querySelector('.rollback [type="range"]');
const rollbackSpan  = document.querySelector('.rollback .range-value');

const button = document.getElementsByClassName('handler_btn');
let [buttonCalculate, buttonClear] = button;

const totalInput = document.getElementsByClassName('total-input');
let [totalPrice, totalScreen, totalAddition, totalAllPrice, totalAllPriceRollback] = totalInput;

let screens = document.querySelectorAll('.screen');
const cloneClearScreen = screens[0].cloneNode(true);

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  screenCount: 0,
  adaptive: true,
  rollback: 0,
  servicePricePercent: 0,
  servicePriceNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  isError: false,
  
  
  init: function() {
    appData.addTitle();
    rollbackInput.addEventListener('input', appData.addChangeRollback);
    buttonCalculate.addEventListener('click', appData.getCheckValue);
    buttonPlus.addEventListener('click', appData.addScreenBlock);
    
  },
  addTitle: function() {
    document.title = projectName.textContent;
  },
  getCheckValue: function() {
    appData.isError = false;
    screens = document.querySelectorAll('.screen');
    
    screens.forEach(function(screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
      
      if (selectName === select.options[0].textContent || input.value === '') {
        appData.isError = true;
      }

    });
    if (!appData.isError) {
      appData.start();
    } else {
      alert('Выберите типы экранов и их количество!!!');
    }
  },

  start: function() {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    // appData.logger();
    console.log(appData.screens);
    appData.showResult();
    
  },
  showResult: function() {
    totalPrice.value = appData.screenPrice;
    totalScreen.value = appData.screenCount;
    totalAddition.value = appData.servicePricePercent + appData.servicePriceNumber;
    totalAllPrice.value = appData.fullPrice;
    totalAllPriceRollback.value = appData.servicePercentPrice;
  },
  addChangeRollback: function() {
    rollbackSpan.textContent = rollbackInput.value + '%';
    appData.rollback = rollbackInput.value;
    
  },
  addScreens: function() {
    screens = document.querySelectorAll('.screen');
    
    
    screens.forEach(function(screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        input: +input.value
      });
    });
  },
  addServices: function() {
    otherItemsPercent.forEach(function(item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      console.log(check);
      console.log(label);
      console.log(input);
      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
      
    });

    otherItemsNumber.forEach(function(item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      console.log(check);
      console.log(label);
      console.log(input);
      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
      
    });
  },
  addScreenBlock: function() {
    screens = document.querySelectorAll('.screen');
    const cloneScreen = cloneClearScreen.cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
    console.log(document.querySelectorAll('.screen'));

  },
  addPrices: function() {
    appData.screenPrice = appData.screens.reduce(function(sum, price) {
      return sum + price.price;
    }, 0);

    appData.screenCount = appData.screens.reduce(function(sum, input) {
      return sum + input.input;
    }, 0);


    for(let key in appData.servicesNumber) {
      appData.servicePriceNumber += appData.servicesNumber[key];
    }

    for(let key in appData.servicesPercent) {
      appData.servicePricePercent += appData.screenPrice * (appData.servicesPercent[key]/100);
    }

    appData.fullPrice = appData.screenPrice +appData.servicePriceNumber + appData.servicePricePercent;

    appData.servicePercentPrice =  Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100)));
  },


  logger: function() {

    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.services);
  },
  
};


appData.init();

