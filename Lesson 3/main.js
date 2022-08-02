// //   - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// //     Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = +prompt('Enter a number');
// if (x !== 0){
//     console.log('Correct');
// }else {
//     console.log('Incorrect');
// }


// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
//
// let time = +prompt('Enter a number!');
//
// if (time >= 0 && time <= 15) {
//     console.log('It is first quarter');
// } else if (time >= 16 && time <= 30) {
//     console.log('It is second quarter');
// } else if (time >= 31 && time <= 45) {
//     console.log('It is third quarter');
// } else if (time >= 46 && time <= 59) {
//     console.log('It is fourth quarter');
// } else {
//     console.log('You entered incorrect number! Try again!');
// }


// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// // (у першу, другу чи третю).
//
// let date = +prompt ('Enter any date from 1 to 31');
//
// if (date >= 1 && date <=10) {
//     console.log('It is first decade!');
// } else if (date >=11 && date <= 20) {
//     console.log('It is second decade!');
// } else if (date >= 21 && date <= 31) {
//     console.log('It is third decade!')
// } else {
//     console.log('You entered the wrong number! Try again!');
//     document.write(`<h1>You entered the wrong number! Try again!</h1>`)
// }


// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// //    відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let day = prompt ('Enter the number of the day');
//
// switch (day) {
//     case "1":
//         console.log('Sunday');
//         break;
//     case '2':
//         console.log('Monday');
//         break;
//     case '3':
//         console.log('Tuesday');
//         break;
//     case '4':
//         console.log('Wednesday');
//         break;
//     case '5':
//         console.log('Thursday');
//         break;
//     case '6':
//         console.log('Friday');
//         break;
//     case '7':
//         console.log('Saturday');
//         break;
//     default:
//         console.log('Enter correct number!');
// }

// ------------------------ 2nd version of the previous task  -----------------------

// let dictionary = {
//     1: 'Sunday',
//     2: 'Monday',
//     3: 'Tuesday',
//     4: 'Wednesday',
//     5: 'Thursday',
//     6: 'Friday',
//     7: 'Saturday'
// };
//
// let day = prompt('Enter the number of the day');
// console.log(dictionary[day] ?? 'Enter correct number!');

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let firstNumb = +prompt('Enter the first number:');
// let secondNumb = +prompt('Enter the second number:')
//
// let max;
//
// if (firstNumb > secondNumb) {
//     max = firstNumb;
//     console.log(max);
// } else if (secondNumb > firstNumb) {
//     max = secondNumb;
//     console.log(max);
// } else if (firstNumb === secondNumb) {
//     console.log('Both numbers are equal!');
// } else {
//     console.log('You did not write a number!');
// }

// let firstNumb = +prompt('Enter the first number:');
// let secondNumb = +prompt('Enter the second number:')
//
// if (firstNumb > secondNumb) {
//     console.log(firstNumb);
// } else if (secondNumb > firstNumb) {
//     console.log(secondNumb);
// } else if (firstNumb === secondNumb) {
//     console.log('Both numbers are equal!');
// } else {
//     console.log('You did not write a number!');
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
//         falsy (хибноподыбне, тобто кастується до false)
//
// let x = prompt('Enter something');
//
// if (x == '' || x == NaN || x == undefined || x == null || x == 0) {
//     x = 'default';
// }
// console.log(x);
