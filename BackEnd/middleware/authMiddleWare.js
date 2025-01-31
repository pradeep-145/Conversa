const jwt = require('jsonwebtoken')
const { verify } = require('../utils/jwtUtils')

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        res.status(401).json({ message: "Unauthorized" })

    }
    try {
        const decoded = verify(token);
        req.user = decoded;
        next();

    }
    catch {
        res.status(400).json({ message: "Invalid Token" })
    }
}
module.exports = { authMiddleware }