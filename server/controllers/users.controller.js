import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id; // here req.user will come from protectRoute middleware

    // this will get all the users except the loggedInUser and also removes the password property from the user document
    const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password")


    res.status(200).json(allUsers);

  } catch (error) {
    console.log("Error in getUsersForSidebar", error.message);
    res.status(500).json({ error: "Internal Server Error" })

  }
}
