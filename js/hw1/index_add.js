let sharm = 15;
let hurgada = 25;
let taba = 5;
let userError = 'Ошибка ввода';
let userPlace = 'Есть место в группе ';
let userWelcome = 'Приятного путешествия в ';
let userSoSorry = 'Нам очень жаль, приходите еще!';
let userNoPlaces = 'Извините, столько мест нет ни в одной группе!';
let Sharm = 'Sarm';
let Hurgada = 'Hurgada';
let Taba = 'Taba';

let userRequest = prompt('Please enter a number of guests');
if (userRequest > 0 && Number.isInteger(userRequest)) {
    if (userRequest <= taba) {
    let answer = confirm(userPlace + Taba);
        if (answer) {
            alert(userWelcome + Taba);
        } else {
            alert(userSoSorry);
        }
    } else if (userRequest <= sharm && userRequest > taba) {
    let answer = confirm(userPlace + Sharm);
        if (answer) {
            alert(userWelcome + Sharm);
        } else {
            alert(userSoSorry);
        }
    } else if (userRequest <= hurgada && userRequest > sharm) {
    let answer = confirm(userPlace + Hurgada);
        if (answer) {
            alert(userWelcome + Hurgada);
        } else {
            alert(userSoSorry);
        }
    } else {
    alert(userNoPlaces);
    }
} else {
alert(userError);
}
