$(document).ready(function() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  const $postsContainer = $('#posts');

  // Fetch posts using promises
  function fetchPosts() {
      return $.ajax({
          url: apiUrl,
          method: 'GET'
      });
  }

  // Fetch and display posts
  fetchPosts()
      .then(posts => {
          $postsContainer.empty();
          posts.forEach(post => {
              $postsContainer.append(`
                  <div class="post" data-id="${post.id}">
                      <h3>${post.title}</h3>
                      <p>${post.body}</p>
                      <button class="delete-btn">Delete</button>
                  </div>
              `);
          });
      })
      .catch(error => {
          console.error('Error fetching posts:', error);
      });
});


$(document).ready(async function() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  const $postsContainer = $('#posts');
  // Fetch posts using async/await
  async function fetchPosts() {
    try {
      const response = await $.ajax({
        url: apiUrl,
        method: 'GET',
      })
      $postsContainer.empty();
      response.forEach(post => {
        $postsContainer.append(
          `<div id="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button class="delete-btn">Delete</button>
          </div>`
        )
      })
    } catch (error) {
      console.error('error fetching post!', error)
    } finally {
      $loading.hide()
    }
  }
  await fetchPosts();
})


$(document).ready(async function() {
  const apiUrl = 'urlOfApi'
  const $postsContainer = $('#post')

  async function fetchPost() {
    try {
      const response = await $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function() {
          $postsContainer.empty();
          response.forEach(post => {
            $postsContainer.append(
              `<div id="post">
                 <h3>${post.title}</h3>
                 <p>${post.body}</p>
                 <button>Delete</button>
              </div>`
            )
          })
        }
      })
    } catch (error) {
      console.error('Error fetching data', error)
    } finally {
      $loading.hide();
    }
  }
})

