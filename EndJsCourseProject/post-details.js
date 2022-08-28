// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comment

// Стилизация проекта -

// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {
        let postId = document.getElementById('post-id');
        postId.innerText = post.id;

        let postUserId = document.getElementById('post-user-id');
        postUserId.innerText = post.userId;

        let postTitle = document.getElementById('post-title').getElementsByTagName('h2')[0];
        postTitle.innerText = post.title;

        let postBody = document.getElementById('post-body');
        postBody.innerText = post.body;
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(comments => {

        let commentDivs = document.getElementsByClassName('comments-column');

        let i = 0;
        for (const comment of comments) {
            let commentDiv = document.createElement('div');
            commentDiv.className = 'comment';

            let postId = document.createElement('div');
            postId.innerText = `Post ID: ${comment.postId}`;
            commentDiv.appendChild(postId);

            let id = document.createElement('div');
            id.innerText = `Comment ID: ${comment.id}`;
            commentDiv.appendChild(id);

            let name = document.createElement('div');
            name.innerText = `Comment name: ${comment.name}`;
            commentDiv.appendChild(name);

            let email = document.createElement('div');
            email.innerText = `Comment email: ${comment.email}`;
            commentDiv.appendChild(email);

            let body = document.createElement('div');
            body.innerText = comment.body;
            commentDiv.appendChild(body);

            commentDivs[i].appendChild(commentDiv);

            if (i === 3)
                i = 0;
            else
                i++;
        }
    })