const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


const isLoginValid = function (login) {return login.length >= 4 && login.length <= 16 ? true : false;};

const isLoginUnique = function (allLogins, login) {return allLogins.includes(login) ? false : true;};

const addLogin = function (login) {
    let loginLength = isLoginValid(login);
    if (!loginLength) {
        return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    }
    let checkLogin = isLoginUnique(logins, login);
    if (!checkLogin) {
        return console.log('Такой логин уже используется!');
    } else {
        logins.push(login);
        return console.log('Логин успешно добавлен!');
    }
};  

// Вызовы функции для проверки
addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'