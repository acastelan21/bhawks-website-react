const dbData = require("../models/dbData");

module.exports = {
    findAnswers : function(req,res){
        dbData.find().then((doc)=>{
            console.log("found it !")
            res.json(doc)
        })
    },

    insert : function (req, res){
        console.log("adding to database");
        dbData.create(req.body).then(doc=>{
            res.json(doc)
        })
    },
    addLike : function(req, res){
        console.log("updating likes to database");
        console.log(req.body)
        dbData.update({"gifs.identifier":req.body.identifier},{$inc: {"gifs.$.likes":1}}).then(doc => {
            console.log("update likes")
        })
    }
}