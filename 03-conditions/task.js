// пример (задача)

const age = prompt("Напишите Ваш возраст");
const isStudent = prompt("Вы студент? (да/нет)");


const isStudentBool = isStudent.toLocaleLowerCase() === "да";

const ageNum = Number(age);

if (isNaN(ageNum)) {
    console.log("возраст введен некорректно");
} else {
    if (ageNum < 18) {
        console.log("Скидка 50%");
    } else if (ageNum <= 25 && isStudentBool) {
        console.log("Скидка 30%");
    } else if (ageNum <= 25) {
        console.log("Скидка 10%");
    } else {
        console.log("Полная стоимость")
    }
}

