// Домашняя работа 3
// 1. Написать функцию, преобразующую число в объект. Передавая на вход число 
// от 0 до 999, надо получить на выходе объект, в котором в соответствующих 
// свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо 
// получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью 
// console.log и вернуть пустой объект.

let a = +prompt('Введите число от 0 до 999');
function convertNumber () {
    if (a > 999 || a < 0) {
        console.log("Вы ввели неверное число");
        return {}
    } else {
        return obj1 = { 
        units: a - Math.floor(a/100)*100 - Math.floor((a - Math.floor(a/100)*100)/10)*10, 
        tens: Math.floor((a - Math.floor(a/100)*100)/10), 
        hundreds: Math.floor(a/100)}
    }
}

// 2. Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести добавление товара на ОО базу
// Реализовать функционал подсчета корзины на объектно-ориентированную базу.

// Ответ: см. отдельный файл (shop.html)

// 3. 

// 4) **Переделать реализованные ранее законченные продукты 
// (камень-ножницы, быки-коровы) в объекты

// Ответ: см. отдельные файлы (tsu-e-fa.html)