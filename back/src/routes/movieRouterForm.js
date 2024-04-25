const express = require("express");
const router = express.Router();
const movieControllerForm = require("../controllers/movieControllerForm");

router.post("/", movieControllerForm.createMovie);

module.exports = router;
