//const moviesData = require("../data/tempData")
const moviesModel = require("../models/movies.model");

const getMoviesService = async () => {
  // return moviesData
  const respMovies = await moviesModel.find();
  console.log(respMovies);
  return respMovies;
};

module.exports = {
  getMoviesService,
};
