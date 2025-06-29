
// Простой вызов
function sayHello() {
  console.log("👋 Привет, мир!");
}
sayHello();

// С параметрами
function fullName(name, surname) {
  console.log("Твое имя:", name + " " + surname);
}
fullName("Daniil", "Gas");

// С return
function square(num) {
  return num * num;
}
console.log("5 в квадрате:", square(5));

// Функциональное выражение
const minus = function (a, b) {
  return a - b;
};

// Стрелочная
const multiply = (x, y) => x * y;

console.log("4 * 3 =", multiply(4, 3));


