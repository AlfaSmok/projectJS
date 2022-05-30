const title = 'Course JS';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 2569;
const rollback = 35;
const fullPrice = 60000;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase().split(", "));

console.log("Процент отката посреднику за работу " + (fullPrice * (rollback/100)));