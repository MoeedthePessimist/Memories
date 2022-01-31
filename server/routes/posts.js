import express from 'express';


// importing functions from the posts controller
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();


router.get('/', getPosts); //localhost:5000/posts
router.post('/postRequest', createPost); 

export default router;
