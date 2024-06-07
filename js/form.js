function validateForm(event) {
  event.preventDefault();

  const usernameValue = document.getElementById('username').value;
  const tittleValue = document.getElementById('tittle').value;
  const contentValue = document.getElementById('content').value;

  const blogPost = {
    username: usernameValue,
    tittle: tittleValue,
    content: contentValue
  };

  // Retrieve existing blog posts from local storage or initialize an empty array
  let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  // Check if any of the input fields are empty
  if (usernameValue === "" || tittleValue === "" || contentValue === "") {
    alert("Please complete the form before submitting");
  } else {
    // Add the new blog post to the array
    blogPosts.push(blogPost);

    // Save the updated array of blog posts to local storage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    alert('Blog created!');

    // Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('tittle').value = '';
    document.getElementById('content').value = '';

    // Redirect to the 'blog.html' page
    window.location.href = 'blog.html';
  }
}

// Add event listener to the form
document.getElementById('form').addEventListener('submit', validateForm);