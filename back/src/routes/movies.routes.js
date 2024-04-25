const express = require("express");
const getMovies = require("../controllers/movies.controllers");
const movieControllerForm = require("../controllers/movieControllerForm");

const { Router } = express;

const router = new Router();

router.get("/movies", getMovies);
router.post("/movies", movieControllerForm.createMovie);

module.exports = router;
