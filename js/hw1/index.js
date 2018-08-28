let adminLogin = 'admin';
let adminPassword = 'm4ngo1zh4ackz0r';
let accessDenied = 'Доступ запрещен';
let userCancel = 'Отменено пользователем';
let userWelcome = 'Добро пожаловать';
let userLogin = prompt('Enter login');
if (userLogin === null) {
    alert(userCancel);
    console.log(userLogin);
}  else if (userLogin !== adminLogin) {
    alert(accessDenied);
    console.log(userLogin);
} else {
    let userPassword = prompt('Enter password');
    if (userPassword === null) {
        alert(userCancel);
    } else if (userPassword !== adminPassword) {
        alert(accessDenied);
    } else {
        alert(userWelcome);
    }
}
