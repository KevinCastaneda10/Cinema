const Movie = require("../models/movie");
//const movieServiceForm = require("../services/movieServiceForm");

async function createMovie(req, res) {
  try {
    console.log(req.body);
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const movie = new Movie({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    await movie.save();
    res.status(201).json({ message: "Película creada exitosamente", movie });
  } catch (error) {
    console.log("Error al crear la película:", error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createMovie,
};
