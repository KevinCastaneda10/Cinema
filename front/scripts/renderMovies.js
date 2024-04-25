const renderMovies = (movies) => {
  const data = movies
    .map((ele) => {
      return `
      <div class="card contenedor-post" style="width: 18rem;">
        <img src=${ele.poster} class="card-img-top img-card" alt=${ele.title}>
        <div class="card-body cont-card-title">
          <h5 class="card-title">${ele.title}</h5>
        </div>
        <ul class="list-group list-group-flush" style="border: none;">
          <li class="list-group-item list-card">Año: <span>${
            ele.year
          }</span></li>
          <li class="list-group-item list-card">Director: <span>${
            ele.director
          }</span></li>
          <li class="list-group-item list-card"> Duración: <span>${
            ele.duration
          }</span></li>
          <li class="list-group-item list-card">Género: <span>${ele.genre.join(
            ", "
          )}</span></li>
          <li class="list-group-item list-card">Calificación: <span>${
            ele.rate
          }</span></li>
        </ul>
      </div>
        `;
    })
    .join("");

  document.getElementById("movies").innerHTML = data;
};

module.exports = renderMovies;
