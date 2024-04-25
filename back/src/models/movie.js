const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
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

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
