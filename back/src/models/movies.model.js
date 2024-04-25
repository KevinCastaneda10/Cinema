const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  year: Number,
  director: {
    type: String,
  },
  duration: {
    type: String,
  },
  genre: {
    type: Array,
  },
  rate: {
    type: Number,
  },
  poster: {
    type: String,
  },
});

const moviesModel = mongoose.model("movies", MoviesSchema);

module.exports = moviesModel;
