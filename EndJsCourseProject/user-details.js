// https://jsonplaceholder.typicode.com/users/USER_ID
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

// Стилизация проекта -
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
            let id = document.createElement('div');
            id.innerText = `Id: ${user.id}`;
            id.classList.add('child1');

            let name = document.createElement('div');
            name.innerText = `Name: ${user.name}`;
            name.classList.add('child1');

            let username = document.createElement('div');
            username.innerText = `Username: ${user.username}`;
            username.classList.add('child1');

            let email = document.createElement('div');
            email.innerText = `email: ${user.email}`;
            email.classList.add('child1');

            let address = document.createElement('div');
            address.innerText = `Address: ${user.address.street},  ${user.address.suite}, 
                                      ${user.address.city},  ${user.address.zipcode}`;
            address.classList.add('child1');

            let geo = document.createElement('div');
            geo.innerText = `Geo: ${user.address.geo.lat},  ${user.address.geo.lng}`;
            geo.classList.add('child1');

            let phone = document.createElement('div');
            phone.innerText = `Phone: ${user.phone}`;
            phone.classList.add('child1');

            let website = document.createElement('div');
            website.innerText = `Website: ${user.website}`;
            website.classList.add('child1');

            let companyName = document.createElement('div');
            companyName.innerText = `Company name: ${user.company.name}`;
            companyName.classList.add('child1');

            let catchPhrase = document.createElement('div');
            catchPhrase.innerText = `Company Phrase: ${user.company.catchPhrase}`;
            catchPhrase.classList.add('child1');

            let bs = document.createElement('div');
            bs.innerText = `Bs: ${user.company.bs}`;
            bs.classList.add('child1');

            let btn = document.getElementById('btnDecor');
            let postsFetched = false;

            btn.onclick = () => {
                let child2 = document.getElementById('child2');
                let postsDivs = child2.getElementsByClassName('child2-column');
                child2.classList.toggle('hide');

                if(!postsFetched) {
                    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                        .then(response => response.json())
                        .then(posts => {
                            let i = 0;
                            for (const post of posts) {
                                let postDiv = document.createElement('div');
                                let a = document.createElement('a');
                                a.innerText = `${post.title}`;
                                a.classList.add('children');
                                a.setAttribute('href', `./post-details.html?id=${post.id}`);
                                postDiv.appendChild(a);
                                postsDivs[i].appendChild(postDiv);

                                if (i === 4)
                                    i = 0;
                                else
                                    i++;
                            }
                        });
                }

                postsFetched = true;
            }

            let child1 = document.getElementById('child1');
            child1.append(id, name, username, username, address, geo, phone, companyName, catchPhrase, bs, btn);
    });

