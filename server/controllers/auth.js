import bcryptjs from "bcryptjs";


import User from "../models/User.js";


//register user
export const registerUser = ("/register", async (req, res) =>{
    try {
        //generatiing encrypted password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(req.body.password, salt);

        //creating user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        //save user and return response
        const user = await newUser.save();
        const {password, ...other} = user._doc; //everything in user but the password
        res.status(201).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
});

//login user
export const loginUser = ("/login", async(req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("user not found"); //if email in database doesnt exist

        const validPassword = await bcryptjs.compare(req.body.password, user.password) //checking if password matches
        !validPassword && res.status(400).json("wrong password"); //change message to "user not found" for security purposes
        
        const {password, ...other} = user._doc; //everything in user but the password
        res.status(202).json(other); //correct credentials
    } catch (error) {
        res.status(500).json(error);
    }
});


