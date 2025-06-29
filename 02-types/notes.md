# 02 — Типы данных в JavaScript

## 📦 Примитивные типы
- `string` — строки
- `number` — числа
- `boolean` — true / false
- `null` — "пусто", явно заданное отсутствие
- `undefined` — переменная создана, но без значения
- `symbol` — уникальные значения (редко используется)
- `bigint` — большие числа (например, для крипты)

## 📦 Объектные (reference types)
- `object`
- `array`
- `function` (тоже объект!)

## 🔍 typeof
```js
typeof "hello"      // string
typeof 42           // number
typeof true         // boolean
typeof null         // object (!) спец. ошибка в языке
typeof undefined    // undefined
typeof [1,2,3]      // object
typeof function(){} // function
