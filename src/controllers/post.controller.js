const GenerateCaption = require("../services/ai.service");
const uploadImage = require("../services/storage.service");

async function postController(req, res){
    const file = req.file;

    const Base64Image = Buffer.from(file.buffer).toString('base64');

    const Caption = await GenerateCaption(Base64Image);
    const response = await uploadImage(Base64Image,)

    res.status(200).json({
        Caption
    })
}


module.exports = {
    postController
}