const GenerateCaption = require("../services/ai.service");

async function postController(req, res){
    const file = req.file;

    const Base64Image = Buffer.from(file.buffer).toString('base64');

    const Caption = await GenerateCaption(Base64Image);

    res.status(200).json({
        Caption
    })
}



module.exports = {
    postController
}