
let money, time;

function start() {
    money = +prompt("Ваш бюджет на місяць?", '');
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на місяць?", '');
    };
    time = prompt("Введіть датуу форматі YYYY-MM-DD", '');
};

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function choseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введіть обов'язкову статтю розходів в цьому місяці"),
            b = prompt("У скільки це обійдеться");
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;    
        } else {
            i = i - 1;
        };
   };
};

choseExpenses();

// let j = 0;
// while (j < 2) {
//     let a = prompt("Введіть обов'язкову статтю розходів в цьому місяці"),
//         b = prompt("У скільки це обійдеться");
//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
//         console.log("done");
//         appData.expenses[a] = b;
//         };
//     j++;
// };
// let k = 0;
// do {
//     let a = prompt("Введіть обов'язкову статтю розходів в цьому місяці"),
//         b = prompt("У скільки це обійдеться");
//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
//         console.log("done");
//         appData.expenses[a] = b;
//         };
//     k++;

// } while(k < 2);



function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Денний бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Низький рівень достатку");
    } else if (appData.moneyPerDay < 2000 && appData.moneyPerDay > 99) {
        console.log("Середній рівень достатку");
    } else if (appData.moneyPerDay > 1999) {
        console.log("Високий рівень достатку");
    } else {
        console.log ("Щось пішло не так");
    };
};

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Введіть суму заощаджень"),
            percent = +prompt("Під який процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Дохід в місяць з Вашого депозиту: " + appData.monthIncome);
    }
}
checkSavings();


function choseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let x = prompt("Стаття необов'язкових витрат");
        appData.optionalExpenses[1+i] = x;

            console.log(appData.optionalExpenses);
        // } else {
        //     i = i - 1;
        // };
   };
};
choseOptExpenses();
