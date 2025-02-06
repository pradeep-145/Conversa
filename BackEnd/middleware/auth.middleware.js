const jwt = require('jsonwebtoken')
const { verify } = require('../utils/jwt.utils')
const userModel=require('../models/user.model')
const authMiddleware = async  (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        res.status(401).json({ message: "Unauthorized" })

    }
    try {
        const decoded = verify(token);
        if(!decoded){
            res.status(401).json({error:"Unauthorized"})
        }
        else
        {
            const user=await userModel.findById(decoded.userId
            ).select("-password")
            if(!user){
                res.status(404).json({error:"user Not found"})
            }
            req.user=user;
        }
        next();

    }
    catch {
        res.status(400).json({ message: "Invalid Token" })
    }
}
module.exports = { authMiddleware }