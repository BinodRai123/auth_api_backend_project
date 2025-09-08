var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLICKEY,
    privateKey : process.env.IMAGEKIT_PRIVATEKEY,
    urlEndpoint : process.env.IMAGEKIT_ENDPOINT
});

async function uploadImage(file, fileName){
    const response = await imagekit.upload({
        file:file,
        fileName:fileName
    })
}

module.exports = uploadImage;