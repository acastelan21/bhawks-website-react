const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const dbDataSchema = new Schema({
    _id: String,
    player: String,
    position: String,
    gifs: [{
        season: String,
        highlight: String,
        gifLink: String,
        date: String,
        opponent: String
    }]
    
})

const dbData = mongoose.model("Bear", dbDataSchema);
module.exports = dbData; 