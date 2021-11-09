//controller logic for user routers
import bcryptjs from "bcryptjs"; //used to encrypt passwords


import User from "../models/User.js"; //importing user schema


//update user
export const updateUser = ("/:id", async (req, res) => {
    if(req.body.userId == req.params.id){

        if (req.body.password){
            try {
                const salt = await bcryptjs.genSalt(10);
                req.body.password = await bcryptjs.hash(req.body.password, salt);
            } catch (error) {
                return res.status(500).json(error);
            }
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated!");
        } catch (error) {
            return res.status(500).json(error);
        }

    } else {
        return res.status(403).json("You can only update your account!");
    }
});

//delete user
export const deleteUser = ("/id:", async (req, res) => {
    if(req.body.userId == req.params.id){
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        } catch (error) {
            return res.status(500).json(error);
        }
    } else {
        return res.status(403).json("You can only delete your own account!");
    }
});

//follow user
export const followUser = ("/:id/follow", async (req, res) =>{
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {following: req.params.id}});
                res.status(200).json(`${user.username} has been followed`);
            } else {
                res.status(403).json("You already follow this user");
            }
        } catch (error) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can't follow yourself!");
    }
});


//unfollow user
export const unfollowUser = ("/:id/unfollow", async (req, res) =>{
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {following: req.params.id}});
                res.status(200).json(`${user.username} has been unfollowed`);
            } else {
                res.status(403).json("You dont follow this user");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You can't unfollow yourself!");
    }
});


//get user
export const getUser = ("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...other} = user._doc; //sending as a json file, everything is returned except the password
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
});