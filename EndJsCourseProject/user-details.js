// https://jsonplaceholder.typicode.com/users/USER_ID
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {

        let id = document.createElement('div');
        id.innerText = `Id: ${user.id}`;

        let name = document.createElement('div');
        name.innerText = `Name: ${user.name}`;

        let username = document.createElement('div');
        username.innerText = `Username: ${user.username}`;

        let email = document.createElement('div');
        email.innerText = `email: ${user.email}`;

        let address = document.createElement('div');
        address.innerText = `Address: ${user.address.street},  ${user.address.suite}, 
                                      ${user.address.city},  ${user.address.zipcode}`;

        let geo = document.createElement('div');
        geo.innerText = `Geo: ${user.address.geo.lat},  ${user.address.geo.lng}`;

        let phone = document.createElement('div');
        phone.innerText = `Phone: ${user.phone}`;

        let website = document.createElement('div');
        website.innerText = `Website: ${user.website}`;

        let companyName = document.createElement('div');
        companyName.innerText = `Company name: ${user.company.name}`;

        let catchPhrase = document.createElement('div');
        catchPhrase.innerText = `Company Phrase: ${user.company.catchPhrase}`;

        let bs = document.createElement('div');
        bs.innerText = `Bs: ${user.company.bs}`;

        let btn = document.createElement('button');
        btn.innerText = 'Posts titles of current user';

        btn.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    let divPosts = document.createElement('div');
                    document.body.appendChild(divPosts);

                    for (const post of posts) {
                        let postDiv = document.createElement('div');
                        let a = document.createElement('a');
                        a.innerText = `${post.title}`;
                        a.setAttribute('href', `./post-details.html?id=${post.id}`);
                        postDiv.appendChild(a);
                        divPosts.appendChild(postDiv);
                    }
                })
        }

        document.body.append(id, name, username, username, address, geo, phone, companyName, catchPhrase, bs, btn);
    });

