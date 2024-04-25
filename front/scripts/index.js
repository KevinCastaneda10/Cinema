// console.log(tempData);
const renderMovies = require("./renderMovies");
const axios = require("axios");

// axios
//   .get("https://students-api.up.railway.app/movies") //Promesa //Pendiente
//   .then(function (response) {
//     // manejar respuesta exitosa
//     console.log(response.data);
//     renderMovies(response.data);
//   })
//   .catch(function (error) {
//     // manejar error
//     console.log(error);
//   });

async function getMovies() {
  try {
    const response = await axios.get("http://localhost:3000/api/movies");
    console.log(response.data.data);
    renderMovies(response.data.data);
  } catch (error) {
    console.error(error);
  }
}

getMovies();

// $.get({
//   url: "https://students-api.up.railway.app/movies",
//   type: "GET",
//   dataType: "json", // added data type
//   success: function (res) {
//     renderMovies(res);
//   },
// });
