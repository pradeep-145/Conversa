const userModel = require("../models/user.model");

const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const users = await userModel.find({ _id: { $ne: loggedInUserId } }).select("-password")
        res.status(200).json(users)

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal server error" })

    }

}

module.exports = { getUsersForSidebar }