function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('container');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    blogPostsContainer.innerHTML = '';

    blogPosts.forEach(blogPost => {
        const blogPostElement = document.createElement('div');
        blogPostElement.classList.add('blog-post');

        blogPostElement.style.border = '2px solid #0077b6';
        blogPostElement.style.padding = '5px';
        blogPostElement.style.marginBottom = '20px';





        const usernameElement = document.createElement('h3');
        usernameElement.textContent = `Username: ${blogPost.username}`;

        const tittleElement = document.createElement('h2');
        tittleElement.textContent = `Title: ${blogPost.tittle}`;

        const contentElement = document.createElement('p');
        contentElement.textContent = `Content: ${blogPost.content}`;

        blogPostElement.appendChild(usernameElement);
        blogPostElement.appendChild(tittleElement);
        blogPostElement.appendChild(contentElement);

        blogPostsContainer.appendChild(blogPostElement);
    });
}
displayBlogPosts()