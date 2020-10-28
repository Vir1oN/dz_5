// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
// let x1 = +prompt("Enter a number");
// let x2 = +prompt("Enter a number");
// let x3 = +prompt("Enter a number");
//
// console.log(x1);
// console.log(x2);
// console.log(x3);

// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let x1 = parseInt(prompt("Enter a number"), 10);
// let x2 = parseInt(prompt("Enter a number"), 10);
// let x3 = parseInt(prompt("Enter a number"), 10);
// let x4 = parseInt(prompt("Enter a number"), 10);
//
// let result = x1 + x2 + x3 + x4;
// console.log(result);

//при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
// let x1 = Math.round(+prompt("Enter a number"));
// let x2 = Math.round(+prompt("Enter a number"));
// let x3 = Math.round(+prompt("Enter a number"));
// let x4 = Math.round(+prompt("Enter a number"));
//
// let result = x1 + x2 + x3 + x4;
// console.log(result);

//- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
// let x1 = parseInt(prompt("Enter an integer"));
// let x2 = parseInt(prompt("Enter an integer"));
//
// console.log(Math.pow(x1, x2)); //x1 ** x2

//При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
// let a = 100; let b = '100'; let c = true; let d = undefined;
// console.log(typeof (a));
// console.log(typeof (b));
// console.log(typeof (c));
// console.log(typeof (d));
// console.log(typeof ());

//- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true

// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 >= 6);
// console.log(5 == 6);
// console.log(10 == 10);
// console.log(10 === 10);
// console.log(10 < 10);
// console.log(10 > 10);
// console.log(10 != 10);
// console.log(123 === '123');
// console.log(123 == '123');

//- Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(!!'-1'); -> true
// console.log(!!-1); -> true
// console.log(!!'0'); -> true
// console.log(!!'null'); -> true
// console.log(!!'undefined'); -> true
//console.log(!!(3/'owu')); -> false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); -> true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); -> false

//4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = 23;
// let width = 10;
// let s = height * width;
// alert(s);

//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// let v = ((dC / 2) ** 2) * Math.PI * heightC; //v = pi*r^2*h
// alert(v);

//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3, m = 4;
// let k = (n ** 2 + m ** 2) ** (1/2)
// alert(k);

//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = "Hello world";
// console.log(str);
// alert(str);
// document.write(str);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = "Who ";
// let str2 = "are ";
// let str3 = "you?";
// let concatenation = str1 + str2 + str3;
// document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//      let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>"); -> 205 *enter*
//      document.write(str - a + "<br/>"); -> 15 *enter*
//      document.write(str * "2" + "<br/>"); -> 40 *enter*
//      document.write(str / 2 + "<br/>"); -> 10 *enter*

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     console.log(parseInt("3.14")) -> 3
//     console.log(parseInt("-7.875")) -> -7
//     console.log(parseInt("435")) -> 435
//     console.log(parseInt("Вася")) -> NaN

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);
//
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let x = +prompt("Enter the first operand");
// let y = +prompt("Enter the second operand");
// alert(`${x} + ${y} = ${x + y}`);
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// let name = prompt("Enter your name");
// let surName = prompt("Enter your surname");
// let age = +prompt("Enter your age");
// alert(`Good evening, ${name + " " + surName}, congratulations on the age of ${age}`);

//=====================
// ======ДОП============
// =====================
//
// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let x = +prompt();
// let y = +prompt();
// let z = +prompt();
//
// if (x <= y && x <= z && y <= z)
// {
//     console.log(x, y, z)
// }
// else if (x <= y && x <= z && y > z)
// {
//     console.log(x, z, y);
// }
// else if (y <= x && y <= z && x <= z)
// {
//     console.log(y, x, z)
// }
// else if (y <= x && y <= z && x > z)
// {
//     console.log(y, z, x)
// }
// else if (x <= y)
// {
//     console.log(z, x, y)
// }
// else
// {
//     console.log(z, y, x)
// }
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt("What color are the traffic lights?");
// switch (color)
// {
//     case 'green':
//         alert ("Go.");
//         break;
//     case 'yellow':
//         alert ("Wait.");
//         break;
//     case 'red':
//         alert ("Stop.");
//         break;
//     default:
//         alert("Do whatever you want, considering your inability to enter a valid color...");
//}

//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//     Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
let color = prompt("What color are the traffic lights?");
let isRoadClear = confirm("Is the road clear?");

if (color === "green" && isRoadClear)
    alert ("Go.");
else if (color === "green" && !isRoadClear)
    alert("Wait until the law breakers drive through...")
else if (color === "yellow" && !isRoadClear)
    alert ("Wait.");
else if (color === "yellow" && isRoadClear)
    alert("Wait anyway.");
else if (color === "red" && isRoadClear)
    alert ("Stop anyway");
else if (color === "red" && !isRoadClear)
    alert("Stop and wait");
else
    alert("Do whatever you want, considering your inability to enter a valid color...");