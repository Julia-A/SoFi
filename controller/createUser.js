const Users = require('../model/Users');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    //check if the request is in the right format
    if (!req?.body || !req?.body?.email || !req?.body?.fullName || !req?.body?.password) {
        return res.status(400).json({ message: "Incomplete request" });
    }
    const { email, fullName, password } = req.body;
    //check if a user with the email alredy exists in the database
    try {
      const foundUser = await Users.findOne({ email });
      if (foundUser) {
        res.status(409).json({ message: "User already exists in the databse" });
      }
      //encrypt the password
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await Users.create({
        email: email,
        fullName: fullName,
        password: hashedPassword,
      });
      return res.status(200).json(newUser);
    } catch (err) {
        console.log(err);
    }
};

module.exports = createUser;