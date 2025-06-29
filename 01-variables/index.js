// === var: глобальное и дырявое ===
var nickname = "Gas";
var nickname = "Buster"; // ❗️ можно переобъявить — опасно

// === let: современная замена var ===
let city = "Andijan";
// let city = "Tashkent"; // ❌ ошибка — нельзя переобъявлять
city = "Tashkent"; // ✅ можно переназначить

// === const: константа ===
const country = "Uzbekistan";
// country = "Korea"; // ❌ ошибка — нельзя менять значение

// ✅ const с объектом
const person = {
  name: "Daniil",
  age: 21
};

person.age = 22; // работает — мы не меняем ссылку, а содержимое

console.log(person);