document.getElementById("searchButton").addEventListener("click", function () {
  const movieName = document.getElementById("movieInput").value;
  if (movieName) {
    setTimeout(() => {
      fetchMovieData(movieName);
    }, 1000);
  }
});

function fetchMovieData(movieName) {
  fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=784984ee`)
    .then((response) => response.json())
    .then((data) => displayMovieData(data))
    .catch((error) => console.error("Error:", error));
}

function displayMovieData(data) {
  if (data.Response === "True") {
    document.getElementById("movieDetails").innerHTML = `
            <h2>${data.Title} (${data.Year})</h2>
            <p><strong>Director:</strong> ${data.Director}</p>
            <p class="plot"><strong>Plot:</strong> ${data.Plot}</p>
            <img src="${data.Poster}" alt="${data.Title} Poster">
        `;
  } else {
    document.getElementById(
      "movieDetails"
    ).innerHTML = `<p>Movie not found.</p>`;
  }
}

//  document.getElementById("searchButton").addEventListener("click", function () {
//    const movieName = document.getElementById("movieInput").value;
//    if (movieName) {
//      setTimeout(() => {
//        fetchMovieData(movieName);
//      }, 1000);
//    }
//  });

//  function fetchMovieData(movieName) {
//    fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=784984ee`)
//      .then((response) => response.json())
//      .then((data) => displayMovieData(data))
//      .catch((error) => console.error("Error:", error));
//  }

// function displayMovieData(data) {
//   if (data.response === "True") {
//     document.getElementById("movieDetails").innerHTML = `
//          <h2>${data.title} (&{data.year})</h2>
//          <p><strong>Director:</strong> ${data.Director}</p>
//          <p><strong>Plot:</strong> ${data.plot}</p>
//          <img src="${data.poster} alt="${data.title}">
//         `;
//   } else {
//     document.getElementById("movieDetails").innerHTML = "Movie not found";
//   }
// }
