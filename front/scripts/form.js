function clearForm() {
  document.getElementById("movieForm").reset();
}

document
  .getElementById("movieForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    createMovie();
  });

function createMovie() {
  const title = document.getElementById("title").value;
  console.log(title)
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genre = document.getElementById("genre").value;
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  axios
    .post(
      "http://localhost:3000/api/movies",
      {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      }
    )
    .then(function (response) {
      console.log(response.data);
      alert("Película creada exitosamente");
      clearForm();
    })
    .catch(function (error) {
      console.log();(error);
      alert("Error al crear la película", error);
    });
}
