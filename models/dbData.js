const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const dbDataSchema = new Schema({
    _id: String,
    player: String,
    position: String,
    number: String,
    gifs: [{

        identifier:String,
        season: String,
        highlight: String,
        gifLink: String,
        date: String,
        opponent: String,
        likes: Number
    }]
    
})

const dbData = mongoose.model("Bear", dbDataSchema);
module.exports = dbData; 