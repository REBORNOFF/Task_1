"use strict";

//Создание переменных
let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

//Создание объекта appData
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }   
};

//Cycle while
// let i = 0;
// while (i <2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//         if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//             appData.expenses[a] = b;
//             console.log("ok");
//         } else {
//             i--;
//             console.log("not ok");
//         }
//     i++;
//     console.log("_+++");
// };

//cycle do while
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//         if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//             appData.expenses[a] = b;
//             console.log("ok");
//         } else {
//             i--;
//             console.log("not ok");
//         }
//     i++;
//     console.log("_+++");
// }
// while (i < 2);

alert(appData.budget / 30);
console.log(appData);

