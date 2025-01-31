const userModel = require('../models/userModel')
const { generateToken } = require('../utils/jwtUtils')
const login = (req, res) => {
    const { username, password } = req.body;
    userModel.findOne({ username: username }).then((result) => {
        console.log('result')
        if (result.password === password) {
            const payload = {
                userId: result._id,
                username: username,

            }
            const token = generateToken(payload);
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

const register = (req, res) => {
    userModel.create(req.body).then(() => {
        res.status(201).json({ success: true })
    }).catch((error) => {
        res.status(409).json({ code: error.errorResponse.code })
    })
}

module.exports = { register, login }