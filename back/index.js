const app = require("./src/server");
const routerMovies = require("./src/routes/movies.routes");
const dbCon = require("./src/config/dbCon");

app.use("/api", routerMovies);

dbCon()
  .then((res) => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error al conectar con BDD", err.message);
  }); 

  