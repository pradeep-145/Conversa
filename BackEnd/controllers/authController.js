const userModel = require('../models/userModel')
const { generateToken } = require('../utils/jwtUtils')
const bcrypt=require('bcryptjs')
const login = (req, res) => {
    const { username, password } = req.body;
    userModel.findOne({ username: username }).then((result) => {
        if (bcrypt.compare(password,result.password)) {
            const payload = {
                userId: result._id,
                username: username,
            }
            const token = generateToken(payload);
            res.cookie('jwt',token,{
                maxAge:60*60*1000,
                httpOnly:true,
                sameSite:"strict",
            })
            res.status(200).json({ success: true, token: token });
        }
        else {
            res.status(401).json({ success: false });
        }
    }).catch((error) => {
        console.log(error)
        res.status(404).json({ message: "user not found" });
    })

}

const register = async(req, res) => {
    const {username,name,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10)
    userModel.create({username:username, name:name, password:hashedPassword}).then((result) => {
        res.status(201).json({ success: true ,message:result})
    }).catch((error) => {
        console.log(error)
        res.status(409).json(error)
    })
}

module.exports = { register, login }