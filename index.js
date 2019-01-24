// краткая запись определения функции с аргументами (number, total) 
const percentageCalculator = (number, total) => number * total / 100; 

// развернутая запись определения функции с аргументами (number, total)
// const percentageCalculator = (number, total) => {
//   return number * total / 100;
// };

const tax = percentageCalculator; // создание новой константы tax 

console.log("How much is the tax ?"); // вызов надписи "How much is the tax ?"
console.log(percentageCalculator(25000, 13)); // вызов функции percentageCalculator
console.log(tax(50000, 13)); // вызов функции tax
console.log(tax(75000, 13)); // вызов функции tax
console.log(tax(250000, 13)); // вызов функции tax