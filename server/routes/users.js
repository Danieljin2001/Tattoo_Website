import express from 'express'; //importing from express
import { getUser } from '../controllers/users.js';

const router = express.Router();//setting router instance

router.get("/", (req,res) =>{
    res.send("user router works!!!!!!!");
});

//update user
//delete user
//get user
//follow user
//unfollow user



export default router; //default export