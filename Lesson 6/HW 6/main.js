// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

//--------------------------------------------------------------
// let str = 'hello word';
// console.log(str.length);

// -------------------------------------------------------------
// let str = 'lorem ipsum';
// console.log(str.length);

// -------------------------------------------------------------
// let str = 'javascript is cool';
// console.log(str.length);



//====================================================================================================================
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'

//--------------------------------------------------------------
// let str = 'hello word';
// console.log(str.toUpperCase());

// -------------------------------------------------------------
// let str = 'lorem ipsum';
// console.log(str.toUpperCase());

// -------------------------------------------------------------
// let str = 'javascript is cool';
// console.log(str.toUpperCase());

//---------------2nd version-------------------
// let str1 = 'hello word';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());



//====================================================================================================================
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

//--------------------------------------------------------------
// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());

// --------------------------------------------------------------
// let str = 'LOREM IPSUM';
// console.log(str.toLowerCase());

//--------------------------------------------------------------
// let str = 'JAVASCRIPT IS COOL';
// console.log(str.toLowerCase());

//---------------2nd version-------------------
// let str1 = 'hello word';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.toLowerCase(), str2.toLowerCase(), str3.toLowerCase());

//====================================================================================================================
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let dirtyStr = ' dirty string   ';
// console.log(dirtyStr);
// let cleanStr = dirtyStr.replace(/^ +| +$/g, '');
// console.log(cleanStr);

//---------------2nd version-------------------

// let dirtyStr = ' dirty string   ';
// let cleanStr = dirtyStr.trim();
// console.log(cleanStr);

//====================================================================================================================
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// console.log(str);
// function stringToArray (...x){
//     let arr = str.split(' ');
//     return arr;
// }
//
// console.log(stringToArray());

//---------------2nd version-------------------

//  let str = 'Ревуть воли як ясла повні';
// let strToArr = (str) => str.split(' ');
// console.log(strToArr(str));



//====================================================================================================================
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let array = [10,8,-7,55,987,-1011,0,1050,0];
// let strings = array.map(value => value.toString());
// console.log(strings);


// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
// //     sortNums(nums,'ascending') // [3,11,21]
// //     sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];

// let sortNums = (direction, arr) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         arr.sort((a, b) => b - a);
//     }
//     return (arr);
// }
// console.log(sortNums('ascending', nums));
// console.log(sortNums('descending', nums));



//====================================================================================================================
// // - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// // -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));


// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);

// //--------------------------------2nd-----------------------------------
// let filter = coursesAndDurationArray.filter(function (value){
//     return value.monthDuration > 5;
// });
// console.log(filter);



//====================================================================================================================
// // описати колоду карт
// // - знайти піковий туз
// // - всі шістки
// // - всі червоні карти
// // - всі буби
// // - всі трефи від 9 та більше
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }



// let cards = [
//     {cardSuit: 'clubs', value: 'Ace', color:'black'},
//     {cardSuit: 'clubs', value: 6, color:'black'},
//     {cardSuit: 'clubs', value: 7, color:'black'},
//     {cardSuit: 'clubs', value: 8, color:'black'},
//     {cardSuit: 'clubs', value: 9, color:'black'},
//     {cardSuit: 'clubs', value: 10, color:'black'},
//     {cardSuit: 'clubs', value: 'Joker', color:'black'},
//     {cardSuit: 'clubs', value: 'Queen', color:'black'},
//     {cardSuit: 'clubs', value: 'King', color:'black'},
//
//     {cardSuit: 'diamonds', value: 'Ace', color:'red'},
//     {cardSuit: 'diamonds', value: 6, color:'red'},
//     {cardSuit: 'diamonds', value: 7, color:'red'},
//     {cardSuit: 'diamonds', value: 8, color:'red'},
//     {cardSuit: 'diamonds', value: 9, color:'red'},
//     {cardSuit: 'diamonds', value: 10, color:'red'},
//     {cardSuit: 'diamonds', value: 'Joker', color:'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color:'red'},
//     {cardSuit: 'diamonds', value: 'King', color:'red'},
//
//     {cardSuit: 'hearts', value: 'Ace', color:'red'},
//     {cardSuit: 'hearts', value: 6, color:'red'},
//     {cardSuit: 'hearts', value: 7, color:'red'},
//     {cardSuit: 'hearts', value: 8, color:'red'},
//     {cardSuit: 'hearts', value: 9, color:'red'},
//     {cardSuit: 'hearts', value: 10, color:'red'},
//     {cardSuit: 'hearts', value: 'Joker', color:'red'},
//     {cardSuit: 'hearts', value: 'Queen', color:'red'},
//     {cardSuit: 'hearts', value: 'King', color:'red'},
//
//     {cardSuit: 'spades', value: 'Ace', color:'black'},
//     {cardSuit: 'spades', value: 6, color:'black'},
//     {cardSuit: 'spades', value: 7, color:'black'},
//     {cardSuit: 'spades', value: 8, color:'black'},
//     {cardSuit: 'spades', value: 9, color:'black'},
//     {cardSuit: 'spades', value: 10, color:'black'},
//     {cardSuit: 'spades', value: 'Joker', color:'black'},
//     {cardSuit: 'spades', value: 'Queen', color:'black'},
//     {cardSuit: 'spades', value: 'King', color:'black'},
// ];

// // // - знайти піковий туз
//  let findAce = cards.find(value => value.cardSuit === 'spades'&&  value.value === 'Ace');
// console.log(findAce);


// // - всі шістки
// let findSix = cards.filter(value => value.value === 6);
// console.log(findSix);


// // - всі червоні карти
// let findRed = cards.filter(value => value.color === 'red');
// console.log(findRed);


// // - всі буби
// let findDiamonds = cards.filter(value => value.cardSuit === 'diamonds');
// console.log(findDiamonds);


// // - всі трефи від 9 та більше
// let findClubs = cards.filter(value => value.cardSuit === 'clubs' && value.value > 8 || typeof value.value === 'string' && value.cardSuit === 'clubs');
// console.log(findClubs);



//====================================================================================================================
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// let reduce = cards.reduce((accum , cards) => {
//     if (cards.cardSuit === 'spades') {
//         accum.spades.push(cards);
//     } else if (cards.cardSuit === 'diamonds') {
//         accum.diamonds.push(cards);
//     } else if (cards.cardSuit === 'hearts') {
//         accum.hearts.push(cards);
//     } else if (cards.cardSuit === 'clubs') {
//         accum.clubs.push(cards);
//     }
//     return accum;
// },
//     {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// })
// console.log(reduce);