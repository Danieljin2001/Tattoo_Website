import express from 'express'; //importing from express
import { getUser, updateUser, deleteUser, followUser } from '../controllers/users.js';

const router = express.Router();//setting router instance

//get user
router.get("/:id", getUser);

//update user
router.put("/:id", updateUser);

//delete user
router.delete("/:id", deleteUser);

//follow user
router.put("/:id/follow", followUser);

//unfollow user



export default router; //default export