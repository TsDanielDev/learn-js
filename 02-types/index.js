// Примитивы
const name = "Daniil";         // string
const age = 22;                // number
const isDev = true;            // boolean
const empty = null;            // null
let notDefined;                // undefined
const large = 12345678901234567890n; // bigint

// Объекты
const skills = ["HTML", "CSS", "JS"];
const user = { name: "Gas", city: "Shahrixon" };
function greet() {
  console.log("Salom!");
}

// typeof во всех случаях
console.log(typeof name);        // "string"
console.log(typeof age);         // "number"
console.log(typeof isDev);       // "boolean"
console.log(typeof empty);       // "object" ❗️
console.log(typeof notDefined);  // "undefined"
console.log(typeof large);       // "bigint"

console.log(typeof skills);      // "object"
console.log(Array.isArray(skills)); // true

console.log(typeof user);        // "object"
console.log(typeof greet);       // "function"
