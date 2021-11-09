import express from "express";
import { getPost, createPost } from '../controllers/posts.js';

const router = express.Router();

//get post
router.get("/", getPost);

//create post
router.post('/', createPost);

export default router;