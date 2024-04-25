const moviesService = require("../services/movies.service");

const getMovies = async (req, res) => {

  const respMovies = await moviesService.getMoviesService();
  console.log("controller", respMovies);
  res.send({ data: respMovies, msg: "Todas peliculas obtenidas con existo" });
  
};

module.exports = getMovies;
