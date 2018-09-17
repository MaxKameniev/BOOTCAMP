'use strict';

// function sayHello() {
//     console.log(Hello);
// }

// let first =  setTimeout(sayHello, 2000);

// let second =  setInterval(sayHello, 1000);

// console.log(first);
// console.log(second);

// clearInterval(second);
// clearTimeout(first);

// let date = new Date();
// console.log(date.getMonth());

let deadline = new Date(2019, 0, 1, 0, 0, 0);


setInterval( function() {
let today = Date.now();
let timer = deadline -  today;
let seconds = Math.floor((timer/1000)%60);
let minutes = Math.floor((timer/1000/60)%60);
let hours = Math.floor((timer/1000/60/60)%60);
let days = Math.floor(timer/1000/60/60/24);
document.querySelector('.days').textContent = days;
document.querySelector('.hours').textContent = hours;
document.querySelector('.minutes').textContent = minutes;
document.querySelector('.seconds').textContent = seconds;
}, 1000);
