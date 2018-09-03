let userPass;
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;

do {
    userPass = prompt('Enter pass please');
    if (userPass === null) {
        break;
    } else if (passwords.includes(userPass)) {
        alert('Добро пожаловать!');
        break;
    } else {
        attempts--;
        if (attempts !== 0) {
        alert('Неверный пароль, у вас осталось ' + attempts + ' попыток');
        } else {
            alert('У вас закончились попытки, аккаунт заблокирован!');
        }
    }
}

while (attempts > 0);

console.log(userPass);