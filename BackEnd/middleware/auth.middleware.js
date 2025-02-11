const { verify } = require('../utils/jwt.utils');
const userModel = require('../models/user.model');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = verify(token);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const user = await userModel.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User Not Found" });
        }

        req.user = user;
        next(); // Call next() only when everything is validated

    } catch (error) {
        console.error("Auth Middleware Error:", error);
        if (!res.headersSent) { // Ensure no response has already been sent
            return res.status(400).json({ message: "Invalid Token" });
        }
    }
};

module.exports = { authMiddleware };
