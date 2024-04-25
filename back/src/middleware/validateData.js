function validateData(req, res, next) {
  const { title, director, year } = req.body;
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res
      .status(400)
      .json({ message: "Todos los datos son obligatorios." });
  }
  next();
}

module.exports = validateData;
