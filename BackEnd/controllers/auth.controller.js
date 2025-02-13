const userModel = require('../models/user.model')
const { generateToken } = require('../utils/jwt.utils')
const bcrypt = require('bcryptjs')
const login = async (req, res) => {
    const { username, password } = req.body;
    userModel.findOne({ username: username }).then(async(result) => {
       const isVerified=await  bcrypt.compare(password, result.password)
        if (isVerified) {
            const payload = {
                userId: result._id,
                username: username,
            }
            const token = generateToken(payload);
            res.cookie('jwt', token, {
                maxAge: 15*24*60 * 60 * 1000,
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV === 'production'
            })
            res.status(200).json({ success: true, token: token,message: result });
        }
        else {
            res.status(401).json({ success: false });
        }
    }).catch((error) => {
        console.log(error)
        res.status(404).json({ message: "user not found" });
    })

}

const register = async (req, res) => {
    
    const { username, name, password,gender } = req.body.inputs;
    const hashedPassword = await bcrypt.hash(password, 10)
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    userModel.create({ username: username, name: name, password: hashedPassword,gender:gender,profilePic:gender==="male"?boyProfilePic:girlProfilePic }).then((result) => {
        res.status(201).json({ success: true, message: result })
    }).catch((error) => {
        console.log(error)
        res.status(409).json(error)
    })
}

const logout = (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 0 })
        res.status(200).json({ message: "logged out succesfully" })
    } catch (error) {
        console.log(error);
    }
}
module.exports = { register, login, logout }