const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models");

async function postController(req,res){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"unathorized access, please login first"
        })
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
        
        const user = await userModel.findOne({
            _id:decode.id
        })


    } catch (error) {
        console.log({
            message:"invalid token",
            error
        })
    }
}



module.exports = {
    postController
}