import express from 'express';


// importing functions from the posts controller
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();


router.get('/', getPosts); //localhost:5000/posts
router.post('/', createPost); //localhost:5000/posts

export default router;
