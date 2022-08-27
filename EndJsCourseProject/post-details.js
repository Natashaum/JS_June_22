// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comment
let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(comments => {

        let commentDiv = document.createElement('div');
        document.body.appendChild(commentDiv);

        for (const comment of comments) {
            let div = document.createElement('div');
            div.className = 'comment';

            let postId = document.createElement('div');
            postId.innerText = `Post ID: ${comment.postId}`;
            div.appendChild(postId);

            let id = document.createElement('div');
            id.innerText = `Comment ID: ${comment.id}`;
            div.appendChild(id);

            let name = document.createElement('div');
            name.innerText = `Comment name: ${comment.name}`;
            div.appendChild(name);

            let email = document.createElement('div');
            email.innerText = `Comment email: ${comment.email}`;
            div.appendChild(email);

            let body = document.createElement('div');
            body.innerText = comment.body;
            div.appendChild(body);

            commentDiv.appendChild(div);
        }
    })