const User = require("../model/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    //destructuring the form data or raw data
    const {firstName, lastName, email, password} = req.body;
    try {
        
        if(!firstName || !lastName || !email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        //check for unique email
        const existingEmail = await User.findOne({email: email});
        if(existingEmail) {
            return res.status(400).json({
                success: false,
                message: "Email already exist"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User ({
            firstName, 
            lastName, 
            email, 
            password: hashedPassword
        });
        await user.save();
        const token = jwt.sign({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin
        }, process.env.JWT_SECRET, {expiresIn: "1d"})
        return res.status(201).json({
                success: true,
                message: "User Registered Successfully.!!",
                token,
                user
            });
    } catch (error) {
        return res.status(500).json({
                success: false,
                message: `Error wile register is ${error}`
            });
    }
}

const login = async (req, res) => {

}

module.exports = {
    register, 
    login
}