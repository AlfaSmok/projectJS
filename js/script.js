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
    this.addTitle();
    rollbackInput.addEventListener('input', this.addChangeRollback);
    buttonCalculate.addEventListener('click', this.getCheckValue.bind(this));
    buttonPlus.addEventListener('click', this.addScreenBlock);
    buttonClear.addEventListener('click', this.reset.bind(this));
  },

  start: function() {
    this.addScreens();
    this.addServices();
    this.addPrices();
    // this.logger();
    this.showResult();
    
  },

  addTitle: function() {
    document.title = projectName.textContent;
  },
  getCheckValue: function() {
    this.isError = false;
    screens = document.querySelectorAll('.screen');
    
    screens.forEach((screen, index) =>  {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
      
      if (selectName === select.options[0].textContent || input.value === '') {
        this.isError = true;
      }

    });
    if (!this.isError) {
      this.start();
      buttonCalculate.style.display = 'none';
      buttonClear.style.display = 'block';
      buttonPlus.setAttribute('disabled', 'disabled');
    } else {
      alert('Выберите типы экранов и их количество!!!');
    }
    rollbackInput.setAttribute('disabled', 'disabled');
    
  },

  
  showResult: function() {
    totalPrice.value = this.screenPrice;
    totalScreen.value = this.screenCount;
    totalAddition.value = this.servicePricePercent + this.servicePriceNumber;
    totalAllPrice.value = this.fullPrice;
    totalAllPriceRollback.value = this.servicePercentPrice;
  },
  addChangeRollback: function() {
    rollbackSpan.textContent = rollbackInput.value + '%';
  },
  
  addScreens: function() {
    screens = document.querySelectorAll('.screen');
    
    
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        input: +input.value
      });
      select.setAttribute('disabled', 'disabled');
      input.setAttribute('disabled', 'disabled');
    });


  },
  addServices: function() {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
      check.setAttribute('disabled', 'disabled');
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
      check.setAttribute('disabled', 'disabled');
    });
  },
  addScreenBlock: function() {
    screens = document.querySelectorAll('.screen');
    const cloneScreen = cloneClearScreen.cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);

  },
  addPrices: function() {
    this.screenPrice = this.screens.reduce((sum, price) => {
      return sum + price.price;
    }, 0);

    this.screenCount = this.screens.reduce((sum, input) => {
      return sum + input.input;
    }, 0);


    for(let key in this.servicesNumber) {
      this.servicePriceNumber += this.servicesNumber[key];
    }

    for(let key in this.servicesPercent) {
      this.servicePricePercent += this.screenPrice * (this.servicesPercent[key]/100);
    }

    this.fullPrice = this.screenPrice +this.servicePriceNumber + this.servicePricePercent;

    this.rollback = rollbackInput.value;
    this.servicePercentPrice =  Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback/100)));
  },

  reset: function() {
    buttonCalculate.style.display = 'block';
    buttonClear.style.display = 'none';
    this.getClearScreens();
    this.getClearServices();
    this.getClearPrice();
    this.showResult();
    buttonPlus.removeAttribute('disabled');
    rollbackInput.removeAttribute('disabled');
  },

  getClearScreens: function() {
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');

      if(index == 0) {
        select[0].selected = true;
        input.value = '';
      } else {
        screens[index].remove();
      }

      select.removeAttribute('disabled');
      input.removeAttribute('disabled');
    });
    this.screens = [];
  },

  getClearServices: function() {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      check.checked = false; 
      check.removeAttribute('disabled');     
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      check.checked = false; 
      check.removeAttribute('disabled');   
    });

  },

  getClearPrice: function() {
    this.screenCount = 0;
    this.screenPrice = 0;
    this.rollback = 0;
    this.servicePricePercent = 0;
    this.servicePriceNumber = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
    rollbackInput.value = 0;
    rollbackSpan.textContent = 0 + '%';
  },

  logger: function() {

    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);
    console.log(this.screens);
    console.log(this.reset);
  },
  
};

appData.init();
