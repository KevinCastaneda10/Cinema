require("dotenv").config();

const mongoose = require("mongoose");

const dbCon = async () => {
  await mongoose.connect(
    "mongodb+srv://kevin_castaneda10:Kcc.1997%40@cluster0.3kqoqbu.mongodb.net/dbDemo?retryWrites=true&w=majority&appName=Cluster0"
  );
  //console.log(process.env.MONGO_URI);
};

module.exports = dbCon;
