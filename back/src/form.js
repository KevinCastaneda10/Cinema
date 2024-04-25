const express = require("express");
const mongoose = require("mongoose");
const movieRouterForm = require("./routes/movieRouterForm");

const app = express();
app.use(express.json());

mongoose.connect(
    "mongodb+srv://kevin_castaneda10:Kcc.1997%40@cluster0.3kqoqbu.mongodb.net/dbDemo?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use("/movies", movieRouterForm);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
