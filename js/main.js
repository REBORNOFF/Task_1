"use strict";

let startButton = document.getElementById("start"), // Получить кнопку "Начать расчет" через id
    budgetValue = document.getElementsByClassName("budget-value")[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0], 
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
	optionalExpensesBtn = document.getElementsByTagName("button")[1],
	countBudgetBtn = document.getElementsByTagName("button")[2],
	//expensesValue = document.querySelector(".expenses-value"),
    optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    savings = document.querySelector("#savings"),
    chooseSumm = document.querySelector("#sum"),
    choosePercent = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"), 
	dayValue = document.querySelector(".day-value ");

let money, time;

//Делаем кнопки не активными
expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

startButton.addEventListener("click", function() {
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
	
	expensesItemBtn.disabled = false;
	optionalExpensesBtn.disabled = false;
	countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener("click", function () {
    let summ = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                console.log ("done");
				appData.expenses[a] = b;
				summ += +b;
            } else {
                console.log ("bad result");
                i--;
            }
        
		}
	expensesValue.textContent = summ;
});

optionalExpensesBtn.addEventListener("click", function () {
	for (let i = 0; i < optionalexpensesItem.length; i++) {
		let questionOptExpenses = optionalexpensesItem[i].value;
		appData.optionalExpenses[i] = questionOptExpenses;
		optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
		console.log(appData.optionalExpenses);
	}
});

//Расчет дневного бюджета
countBudgetBtn.addEventListener("click", function () {
	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - +expensesValue.textContent)/ 30).toFixed();
    	daybudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Это минимальный уровень достатка!";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Это средний уровень достатка!";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "Это высокий уровень достатка!";
		} else {
			levelValue.textContent = "Произошла ошибка!";
		} 
	} else {
		daybudgetValue.textContent = "Произошла ошибка!";
	}
       
});

//
//input - событие, которое возникает когда что-то вводится в input, texterea..
//change - событие, которое возникает когда фокус переключается и клик 
//происходит в другом месте..
//

chooseIncome.addEventListener("input", function () {
	let items = chooseIncome.value;
	appData.income = items.split(", ");
	incomeValue.textContent = appData.income;
});

savings.addEventListener("click", function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

chooseSumm.addEventListener("input", function () {
	if (appData.savings == true) {
		let sumValue = +chooseSumm.value,
			percentValue = +choosePercent.value;

		appData.monthIncome = sumValue/100/12*percentValue;
		appData.yearIncome = sumValue/100*percentValue;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

choosePercent.addEventListener("input", function () {
	if (appData.savings == true) {
		let sumValue = +chooseSumm.value,
			percentValue = +choosePercent.value;

		appData.monthIncome = sumValue/100/12*percentValue;
		appData.yearIncome = sumValue/100*percentValue;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
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

