import mongoose from 'mongoose';


// schema for a post
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

// creating a mongoose model on which CRUD commands can be executed such as create, find, delete, update etc.
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

