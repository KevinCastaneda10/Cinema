const Movie = require("../models/movies.model");
const Movie = require("../models/movie");

async function createMovie(data) {
  try {
    const movie = new Movie.create(data);
    await movie.save();
    return movie;
  } catch (error) {
    throw error("Error al crear la película");
  }
}

module.exports = {
  createMovie,
};
