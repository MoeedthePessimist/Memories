import PostMessage from '../models/postMessage.js';


// method to get all the posts from the database
export const getPosts = async(req, res) => { 
    try {
        const postMessages = await PostMessage.find(); //retrieve all the messages from the database
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    };
};

// method to create a post and add it to the database
export const createPost = async (req, res) => {
    const post = req.body;
    
    const newPost = new PostMessage(post);

    try {
        await newPost.save();    
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    };
};



