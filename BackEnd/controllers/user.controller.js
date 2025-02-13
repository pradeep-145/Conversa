import userModel from "../models/user.model.js";

const getUsersForSidebar = async (req, res) => {
    try {
  

        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const loggedInUserId = req.user._id;
      

        const users = await userModel.find({ _id: { $ne: loggedInUserId } }).select("-password");
        

        res.status(200).json(users);
    } catch (error) {
        console.error("❌ Error fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


export { getUsersForSidebar };
