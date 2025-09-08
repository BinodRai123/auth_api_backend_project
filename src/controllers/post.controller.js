const GenerateCaption = require("../services/ai.service");
const uploadImage = require("../services/storage.service");
const postModel = require("../models/post.model");
const { v4: uuidv4 } = require('uuid');

async function postController(req, res){
    const file = req.file;

    const Base64Image = Buffer.from(file.buffer).toString('base64');

    const Caption = await GenerateCaption(Base64Image);
    const image = await uploadImage(Base64Image,`${uuidv4()}`)

    const post = await postModel.create({
        image:image.url,
        caption:Caption,
        user: req.user._id
    }) 

    res.status(201).json({
        message:"new post upload sucessfully",
        post
    })
}


module.exports = {
    postController
}