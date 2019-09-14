"use strict";

//Создание переменных
let money, time;

//Создание объекта appData
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function start () {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
};

start();

//Статья обязательных расходов
function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
           
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            console.log("Ok");
            appData.expenses[a] = b;
        } else {
            i--;
        }   
    }
};

chooseExpenses();

//Ежедневный бюджет
function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    console.log(appData);
};

detectDayBudget();

//Сумма накоплений
function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
};

checkSavings();

//Необязательные расходы 
function chooseOptExpenses () {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
};

chooseOptExpenses ();

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