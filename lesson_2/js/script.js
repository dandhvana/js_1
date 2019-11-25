// Домашняя работа 2
// Задание 1.
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3
// Почему код даёт именно такие результаты? 

// Ответ: В постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование. 
// В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением. Следовательно: 
// с = ++а; - сначала происходит инкрементирование, а потом возвращение, т.о. получаем 2;
// d = b++; - сначала происходит возврат, поэтому и результат 1. Если бы мы снова вызвали 
// b или d, то инкерементирование было бы выполнено, и мы получили бы 2 уже;
// c = (2+ ++a); alert(c); - из уже известного принципа следует, что мы к 2 добавляем 3 (префиксная форма), получая 5.
// d = (2+ b++); alert(d); - из уже известного принципа следует, что мы к 2 добавляем 2 
// (постфиксная форма - инкрементироования пока не произошло), получая 4.
// Но при последующем выводе b мы получаем 3, потому что инкерементирование теперь уже выполнилось.

// Задание 2.
// var a = 2;
// var x = 1 + (a *= 2);

// Задание 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

let a = 2, b = 3;
console.log(a >= 0 && b >= 0 ? a - b : (a < 0 && b < 0 ? a * b : a + b));

// *Решил чуть поменять условие и сделать вариант с функцией.

function signCheck(a, b) {
    console.log(a >= 0 && b >= 0 ? a - b : (a < 0 && b < 0 ? a * b : a + b));
}

// Задание 4.
// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

function rangeBetween(start, end) {
    let arr = [];
    let range = (end - start) + 1;
    for (let index = 0; index < range; index++) {
        arr.push(start++)
    }
    return arr
}

let a2 = 10;
switch (a2) {
    case 0:
        console.log(rangeBetween(a2, 15))
        break;
    case 1:
        console.log(rangeBetween(a2, 15))
        break;
    case 2:
        console.log(rangeBetween(a2, 15))
        break;
    case 3:
        console.log(rangeBetween(a2, 15))
        break;
    case 4:
        console.log(rangeBetween(a2, 15))
        break;
    case 5:
        console.log(rangeBetween(a2, 15))
        break;
    case 6:
        console.log(rangeBetween(a2, 15))
        break;
    case 7:
        console.log(rangeBetween(a2, 15))
        break;
    case 8:
        console.log(rangeBetween(a2, 15))
        break;
    case 9:
        console.log(rangeBetween(a2, 15))
        break;
    case 10:
        console.log(rangeBetween(a2, 15))
        break;
    case 11:
        console.log(rangeBetween(a2, 15))
        break;
    case 12:
        console.log(rangeBetween(a2, 15))
        break;
    case 13:
        console.log(rangeBetween(a2, 15))
        break;
    case 14:
        console.log(rangeBetween(a2, 15))
        break;
    case 15:
        console.log(rangeBetween(a2, 15))
        break;
}

// Задание 5.
// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

// Задание 6.
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) 
// и вернуть полученное значение (использовать switch).

let ch1 = +prompt('Введите А')
let ch2 = +prompt('Введите В')
let opn = +prompt('1 - сложение; 2 - вычитание, 3 - умножение, 4 - деление')

function mathOperation(arg1, arg2, opn) {
    switch (opn) {
        case 1:
            console.log(sum(arg1, arg2))
            break;
        case 2:
            console.log(diff(arg1, arg2))
            break;
        case 3:
            console.log(mult(arg1, arg2))
            break;
        case 4:
            console.log(div(arg1, arg2))
            break;
    }
}

mathOperation(ch1, ch2, opn);

// Задание 7.
// Сравнить null и 0. Попробуйте объяснить результат.

console.log(null == 0); // false
console.log(null != 0); // true
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null > 0); // false
console.log(null < 0); // false

// При сравнении >=, <=, <, > null становится 0, поэтому null >= (<=) 0 истинно, 
// а null < (>) 0 ложно. 
// При нестрогом равенстве/неравенстве ==, != null остается собой, не преобразуясь в 0,
// поэтому null == 0 ложно.

// Задание 8.
// С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val – заданное число, pow – степень.

// Подходит только если pow - целое число.
function power(val, pow) {
    if (pow == 0) {
      return 1;
   } else if (pow >= 1) {
       return val*power(val, pow-1);
   } else if (pow <= -1) {
    return 1 / (val*power(val, -pow-1));
} 
}