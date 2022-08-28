// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.

let mainDiv = document.createElement('div');
mainDiv.classList.add('row');
document.body.appendChild(mainDiv);

let divColumn1 = document.createElement('div');
divColumn1.classList.add('column');
let divColumn2 = document.createElement('div');
divColumn2.classList.add('column');
mainDiv.append(divColumn1, divColumn2);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let isLeft = true;
        for (const user of users) {
            let div = document.createElement('div');
            div.innerText =` ${user.id} ${user.name}`;
            let a = document.createElement('a');
            a.innerText = 'User details';
            div.classList.add('wrapUsersDC');
            a.setAttribute('href', `./user-details.html?id=${user.id}`);
            a.classList.add('wrapUsersDCa');

            if(isLeft)
                divColumn1.append(div, a);
            else
                divColumn2.append(div, a);

            isLeft = !isLeft;
        }
    });



// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

