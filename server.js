const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const dbController = require("./controllers/dbController")
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("/api/database", dbController.insert)
app.get("/api/database", dbController.findAnswers)



app.use(function(req,res){
  res.sendFile(path.join(__dirname, "client/build/index.html"));
})

const db = process.env.MONGODB_URI || "mongodb://chicagosportsgifs:password1@ds263642.mlab.com:63642/heroku_xp1w9n4x"
mongoose.connect(db,{useNewUrlParser:true}, function(error){
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