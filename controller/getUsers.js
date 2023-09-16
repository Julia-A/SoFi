const Users = require('../model/Users');

const getUsers = async (req, res) => {
    //check if the request is in the right format
    if (!req?.body) {
        return res.status(400).json({ message: "Incomplete request" });
    }
    const users = await Users.find({});
   return res.status(200).json(users);
};

module.exports = getUsers;