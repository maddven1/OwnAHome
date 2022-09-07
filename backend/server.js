require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT;
DB = process.env.MONGODB_LOCAL;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var OriginatorRouter=require("./routes/originator");
var nftRouter = require("./routes/nftRoutes.js");
var managerRouter = require("./routes/manager.js");

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connection established successfully !");
  })
  .catch((err) => {
    console.log("MongoDB database connection error !", err);
  });

app.use("/api/nft", nftRouter);
app.use("/api/originator", OriginatorRouter);
app.use("/api/manager",managerRouter);


app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
