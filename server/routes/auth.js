import express from 'express'; //importing from express
import { registerUser, loginUser } from '../controllers/auth.js';

const router = express.Router();//setting router instance

//register user
router.post("/register", registerUser);

//login user
router.post("/login", loginUser);



export default router; //default export