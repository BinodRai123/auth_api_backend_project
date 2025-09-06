const userModel = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerController(req, res){
    const {userName, password} = req.body;

    const isuserNameAlreadyExist = await userModel.findOne({
        userName:userName
    })

    if(isuserNameAlreadyExist){
        return res.status(409).json({
            message:"user name already exist"
        })
    }

    const user = await userModel.create({
        userName,
        password: await bcrypt.hash(password, 10)
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET_KEY)

    res.cookie("token",token);

    res.status(201).json({
        message:"user register sucessfully",
        user:user
    })
}





module.exports = {
    registerController
}