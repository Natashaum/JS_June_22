// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let arr = [];
// let user1 = new User(1, 'Vasia', 'Pupkin', 'vasia@gmail.com', 380673334455);
// let user2 = new User(2, 'Anna', 'Pupkina', 'Anna@gmail.com', 380675554455);
// let user3 = new User(3, 'Ihor', 'Rukin', 'Ihor@gmail.com', 380677774455);
// let user4 = new User(4, 'Nastia', 'Rukina', 'Nastia@gmail.com', 380678884455);
// let user5 = new User(5, 'Vlad', 'Yarema', 'Vlad@gmail.com', 380679994455);
// let user6 = new User(6, 'Max', 'Yaremchuk', 'Max@gmail.com', 380673338855);
// let user7 = new User(7, 'Ira', 'Zumovets', 'Ira@gmail.com', 380673337755);
// let user8 = new User(8, 'Luna', 'Panas', 'Luna@gmail.com', 380673884455);
// let user9 = new User(9, 'Andrii', 'Androshchuk', 'Andrii@gmail.com', 380673333355);
// let user10 = new User(10, 'Angelina', 'Jolie', 'Angelina@gmail.com', 380672224455);
//
// arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(arr);
//
//
// ====================================================================================================================
//
// //- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let arr = [];
// let user1 = new User(1, 'Vasia', 'Pupkin', 'vasia@gmail.com', 380673334455);
// let user2 = new User(2, 'Anna', 'Pupkina', 'Anna@gmail.com', 380675554455);
// let user3 = new User(3, 'Ihor', 'Rukin', 'Ihor@gmail.com', 380677774455);
// let user4 = new User(4, 'Nastia', 'Rukina', 'Nastia@gmail.com', 380678884455);
// let user5 = new User(5, 'Vlad', 'Yarema', 'Vlad@gmail.com', 380679994455);
// let user6 = new User(6, 'Max', 'Yaremchuk', 'Max@gmail.com', 380673338855);
// let user7 = new User(7, 'Ira', 'Zumovets', 'Ira@gmail.com', 380673337755);
// let user8 = new User(8, 'Luna', 'Panas', 'Luna@gmail.com', 380673884455);
// let user9 = new User(9, 'Andrii', 'Androshchuk', 'Andrii@gmail.com', 380673333355);
// let user10 = new User(10, 'Angelina', 'Jolie', 'Angelina@gmail.com', 380672224455);
//
// arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// let filter = arr.filter(value => value.id % 2 === 0);
// console.log(filter);
//
//
// ====================================================================================================================
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let arr = [];
// let user1 = new User(11, 'Vasia', 'Pupkin', 'vasia@gmail.com', 380673334455);
// let user2 = new User(24, 'Anna', 'Pupkina', 'Anna@gmail.com', 380675554455);
// let user3 = new User(3, 'Ihor', 'Rukin', 'Ihor@gmail.com', 380677774455);
// let user4 = new User(4, 'Nastia', 'Rukina', 'Nastia@gmail.com', 380678884455);
// let user5 = new User(55, 'Vlad', 'Yarema', 'Vlad@gmail.com', 380679994455);
// let user6 = new User(6, 'Max', 'Yaremchuk', 'Max@gmail.com', 380673338855);
// let user7 = new User(7, 'Ira', 'Zumovets', 'Ira@gmail.com', 380673337755);
// let user8 = new User(88, 'Luna', 'Panas', 'Luna@gmail.com', 380673884455);
// let user9 = new User(9, 'Andrii', 'Androshchuk', 'Andrii@gmail.com', 380673333355);
// let user10 = new User(10, 'Angelina', 'Jolie', 'Angelina@gmail.com', 380672224455);
//
// arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// let increaseSort = arr.sort((a, b) => a.id - b.id);
// console.log(increaseSort);
//
//
// ====================================================================================================================
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let array = [];
// let client1 = new Client(11, 'Vasia', 'Pupkin', 'vasia@gmail.com', 380673334455, ['bread', 'butter', 'milk', 'dill']);
// let client2 = new Client(24, 'Anna', 'Pupkina', 'Anna@gmail.com', 380675554455, ['bag', 'sharpener', 'pens']);
// let client3 = new Client(3, 'Ihor', 'Rukin', 'Ihor@gmail.com', 380677774455, ['pencils', 'marker']);
// let client4 = new Client(4, 'Nastia', 'Rukina', 'Nastia@gmail.com', 380678884455, ['dress', 'jeans', 'shorts', 'skirt', 'socks', 'shirt']);
// let client5 = new Client(55, 'Vlad', 'Yarema', 'Vlad@gmail.com', 380679994455, ['potato', 'carrot', 'cabbage', 'tomato']);
// let client6 = new Client(6, 'Max', 'Yaremchuk', 'Max@gmail.com', 380673338855, ['cars']);
// let client7 = new Client(7, 'Ira', 'Zumovets', 'Ira@gmail.com', 380673337755, ['tea', 'coffee', 'cappuccino', 'latte']);
// let client8 = new Client(88, 'Luna', 'Panas', 'Luna@gmail.com', 380673884455, ['fish', 'meat']);
// let client9 = new Client(9, 'Andrii', 'Androshchuk', 'Andrii@gmail.com', 380673333355, ['eggs', 'cheese', 'cream']);
// let client10 = new Client(10, 'Angelina', 'Jolie', 'Angelina@gmail.com', 380672224455, ['shoes', 'boots', 'sandals', 'trainers', 'flip-flops']);
//
// array.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// console.log(array);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let increaseGoodsSort = array.sort((a, b) => a.order.length - b.order.length);
// console.log(increaseGoodsSort);
//
//
// ====================================================================================================================
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${maxSpeed} км на годину`);
//     }
//
//     this.info = function () {
//         for (const element in this) {
//             if (typeof this [element] !== 'function') {
//                 console.log(`${element} -- ${this[element]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
//
//     this.changeYear = function (newYear) {
//         this.year = newYear;
//     }
// }
//
// let car = new Car('Toyota', 'Japan', 2015, 250, 2.8);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.addDriver({name: 'Nazar', age: 22});
// car.changeYear(2018);
// console.log(car);
//
//
// ====================================================================================================================
// // -  (Те саме, тільки через клас)
// //    Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     }
//
//     info() {
//         for (const element in this) {
//             if (typeof this [element] !== 'function') {
//                 console.log(`${element} -- ${this[element]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
//     changeYear(newYear) {
//         this.year = newYear;
//     }
// }
//
// let car = new Car('Toyota', 'Japan', 2015, 250, 2.8);
//
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.addDriver({name: 'Nazar', age: 22});
// car.changeYear(2018);
// console.log(car);
//
//
// ====================================================================================================================
// // -   створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// //     Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
// class Cinderella {
//
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinderella1 = new Cinderella('Anna', 22, 36);
// let cinderella2 = new Cinderella('Iryna', 27, 38);
// let cinderella3 = new Cinderella('Anastasia', 35, 34);
// let cinderella4 = new Cinderella('Larysa', 38, 37);
// let cinderella5 = new Cinderella('Vika', 29, 36);
// let cinderella6 = new Cinderella('Victoria', 45, 35);
// let cinderella7 = new Cinderella('Lina', 24, 38);
// let cinderella8 = new Cinderella('Angelina', 37, 38);
// let cinderella9 = new Cinderella('Karina', 33, 37);
// let cinderella10 = new Cinderella('Olena', 21, 39);
//
// let array = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];
//
// class Prince extends Cinderella {
//     constructor(name, age, findFootSize) {
//         super(name, age);
//         this.findFootSize = findFootSize;
//     }
// }
//
// let prince = new Prince('Vasilii', 28, 34);
//
// let find = (array, prince) => {
//     for (const element of array) {
//         if (prince.findFootSize === element.footSize) {
//             return `${element.name} is my Cinderella!`
//         }
//     }
// }
// console.log(find(array, prince));
