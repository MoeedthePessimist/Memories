import mongoose from 'mongoose';


// schema for a post
const postSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    id: { type: String},
});

// creating a mongoose model on which CRUD commands can be executed such as create, find, delete, update etc.
const User = mongoose.model('PostUser', postSchema);

export default User;