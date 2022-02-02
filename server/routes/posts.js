import express from 'express';


// importing functions from the posts controller
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();


router.get('/', getPosts); //localhost:5000/posts (get all posts) 
router.post('/', createPost); //localhost:5000/posts (add a post to the database)
router.patch('/:id', updatePost); //localhost:5000/posts/id (update an existing post)
router.delete('/:id', deletePost); //localhost:5000/posts/id (delete an existing post)
router.patch('/:id/likePost', likePost); //localhost:5000/posts/id/likePost (add a like to a post)

export default router;
