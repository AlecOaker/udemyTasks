let question1 = prompt("Введіть обов'язкову статтю розходів в цьому місяці");
let question2 = prompt("У скільки це обійдеться");
let money,
    time;
let appData = {
    money: money,
    timeData: time,
    expenses: {
        [question1]: question2
    },
    optionalExpenses: 0,
    income: 0,
    savings: false
}
console.log(appData.expenses);
alert(+appData.expenses[question1]/30);
