// for — вывод от 1 до 5
for (let i = 1; i <= 5; i++) {
  console.log("🔁", i);
}

// while — обратный отсчёт
let count = 3;
while (count > 0) {
  console.log("⏳", count);
  count--;
}


// do...while — входим хотя бы раз
let x = 0;
do {
  console.log("🔥 выполняется один раз");
  x++;
} while (x < 0);

// break / continue
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  if (i % 2 === 0) continue;
  console.log("▶️ Нечётное до 7:", i);
}



