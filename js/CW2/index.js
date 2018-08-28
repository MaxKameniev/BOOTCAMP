// var userRequest = prompt('Введите произвольное целое число');
// if (userRequest === null) {
//     alert('Приходите еще!');
// } else if (Number.isInteger(+userRequest)) {
//     alert('Спасибо!');
// } else {
//     alert('Необходимо ввести целое число');
// }


// const num = Number.parseInt(Math.random() * 100);
// let type = num % 2 === 0 ? "even" : "odd"; 
// console.log("${num} is ${type}");

// let hours  = 7;
// let minutes  = 3;
// let seconds = 42;

// // if (hours < 10) {
// //     hours = "0"${hours};
// // }

// // if (minutes < 10) {
// //     minutes = "0"${minutes};
// // }

// // if (seconds < 10) {
// //     seconds = "0"${seconds};
// // }

// hours = hours < 10 ? '0' + hours : hours;
// minutes = minutes < 10 ? '0${minutes}' : minutes;
// seconds = seconds < 10 ? '0${seconds}' : seconds;

// const time = '${hours}:${minutes}:${seconds}';

// console.log("Time is ", time);

// let userRequest = prompt('Please enter number from 1 to 5');
//   if (userRequest === null || userRequest < 1 || number > 5 || isNaN(+userRequest) || !Number.isInteger(+userRequest)) {
//       alert('So sorry, welcome again!');

//   } else {
//     switch (userRequest) {
//         case '1':
//         alert('Hostels catalog');
//         break;

//         case '2':
//         alert('Budget hotels catalog');
//         break;

//         case '3':
//         alert('3* Hotels catalog');
//         break;

//         case '4':
//         alert('4* Hotels catalog');
//         break;

//         case '5':
//         alert("The Best Hotels catalog");
//         break;

//         default:
//         break;
//     }
//   }
// округления
// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.9));
// console.log(Math.round(5.5));

//64 в 10-й степени
// console.log(Math.pow(64,10));

// квадратный корень из
// console.log(Math.pow(4,1/2));

// console.log(Math.abs(-5));
// console.log(Math.min(-5,1,4,6,-56));
// console.log(Math.max(-5,1,4,6,-56));

// let randomNumber = Math.floor(Math.random()*100 + 1); // что бы не было отсчета от 0
// console.log(randomNumber);
 
// let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let result = str[Math.floor(Math.random() * str.length)]

// console.log(result);



let arr = ["Stone", "Paper", "Scissors"];
let computerVar = arr[Math.floor(Math.random() * arr.length)];
computerVar = computerVar.toLowerCase();
console.log(computerVar);

let peopleVar = prompt('Enter Stone, Paper or Scissors');
peopleVar = peopleVar.toLowerCase();
console.log(peopleVar);
if (peopleVar !== 'stone' && peopleVar !== 'paper' && peopleVar !== 'scissors') {
    alert('Please enter correct variant')
    console.log(peopleVar);
} else if (computerVar === peopleVar) {
    alert('No one win');
} else if ((computerVar === 'stone' && peopleVar === 'paper')|| (computerVar === 'paper' && peopleVar === 'scissors') || (computerVar === 'scissors' && peopleVar === 'stone')) {
    alert('You win');
} else if ((computerVar === 'stone' && peopleVar === 'scissors') || (computerVar === 'paper' && peopleVar === 'stone') || (computerVar === 'scissors' && peopleVar === "paper")) {
    alert('Computer win');
} else {
    alert('Something wrong')
}