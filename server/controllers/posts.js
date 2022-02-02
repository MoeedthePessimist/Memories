import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';


// method to get all the posts from the database
export const getPosts = async(req, res) => { 
    try {
        const postMessages = await PostMessage.find(); //retrieve all the messages from the database
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error});
    };
};

// method to create a post and add it to the database
export const createPost = async (req, res) => {
    const post = req.body;
    
    const newPost = new PostMessage(post); //create a PostMessage Object using the model

    try {
        await newPost.save();    
        res.status(201).json(newPost); //save the created PostMessage object in the database
    } catch (error) {
        res.status(409).json({message: error});
    };
};
 

// method to update an existing post
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;

    const post = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });

    res.json(updatedPost);
    
};

// method to delete a post from the database
export const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id');

    await PostMessage.findByIdAndRemove(_id);

    res.json({ message: 'Post Deleted Successfully' });
    
}



// method to add a like to a post
export const likePost = async (req, res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id');

    const post = await PostMessage.findById(_id);

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost);


}

