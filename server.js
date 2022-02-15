const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

//==================================
//I => II.models/User.model.js
app.use(cors());
app.use(express.json());
//============= ROUTES ===================
//Setting up Express Routes
//require 'bread' routes from routes/Bread
//!!!
// const bread = require("./routes/Bread.routes");
// //endpoint is '/bread'
// app.use("/bread", bread);

//========== EVIROMENT VARIABLES ========
dotenv.config(); //'require' is above
// console.log(process.env.Atlas_URI);
//============= MongoDB Atlas ===================
mongoose
  .connect(process.env.Atlas_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Atlass connected");
  })
  .catch((err) => {
    console.log("Can't connect to the MongoDB Atlas");
  });
//========================================================
//Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
