const mongoose = require("mongoose");
const userModel = require("./user.models");


const postSchema = new mongoose.Schema({
    image:String,
    caption:String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})


const postModel = mongoose.model("post",postModel);


module.exports = userModel;