let userInput;
const numbers = [];
let total = 0;

do {
    userInput = prompt('Enter number');
    if (isNaN(userInput)) {
        alert('Было введено не число, попробуйте еще раз');
    } else if (userInput === null) {
        break;
    } else {
    numbers.push(userInput);}
}
while (userInput != null);

console.log(numbers);

let sumArr = 0;
for (let i of numbers) {
    sumArr += Number(i);
}

if (sumArr >= 0 ) {
    alert('Общая сумма чисел равна ' + sumArr);
}


