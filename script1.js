'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
// start();


let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExepses : {},
    income : [],
    savings: true,
    optionalExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = +prompt("Во сколько обойдется?", '');
            if (typeof(a) === 'string' &&
                typeof(a) != null && typeof(b) != null &&
                a != '' && b != '' && a.length < 50) {
                    console.log ("done");
                    appData.expenses[a] = b;
            } else {
                console.log ("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        }   else if (appData.moneyPerDay < 2000) {
                console.log("Средний уровень достатка");
        }   else if (appData.moneyPerDay >= 2000) {
                console.log("Высокий уровень достатка");
        }   else {
                console.log("Error");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ''),
                percent = +prompt("Под какой процент?", '');
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", '');
            console.log(appData.optionalExpenses[i]);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if (typeof(items) === 'string' && items != null && items != '') {
            appData.income = items.split(', ');
            // appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();
        } else {
            alert('Error!');
        }

        let str;
        appData.income.forEach(function(item, i, items) {
            str += '\nСпособы дополнительного заработка: ' + (i+1) + '-' + item;
            return str;
        });
        alert(str);
    },
    showAppData: function() {
        for (let key in appData) {
            console.log('Наша программа включает в себя данные: ' + key);
        }
    }
};