const age = 20;

if (age >= 18) {
  console.log("✅ Совершеннолетний");
} else {
  console.log("🚫 Доступ запрещён");
}

// === else if ===
const score = 72;

if (score >= 90) {
  console.log("Отлично!");
} else if (score >= 70) {
  console.log("Хорошо");
} else {
  console.log("Нужно подтянуть");
}

// === тернарный оператор ===
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log("Скидка:", discount * 100, "%");

// === проверка на пустоту ===
const username = "";

if (username) {
  console.log("Привет,", username);
} else {
  console.log("Аноним");
}