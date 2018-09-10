const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const dbController = require("./controllers/dbController")
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post("/api/database", dbController.insert)
app.get("/api/database", dbController.findAnswers)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const db = process.env.MONGODB_URI || "mongodb://localhost:27017/chicago-sports-website";
mongoose.connect(db, function(error){
  if (error){
    console.error(error);
  }
  else{
    console.log("Mongo connection is successful");
  }
})


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});