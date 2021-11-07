import mongoose from 'mongoose';

//Post Schema
const PostSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        default: []
    },
    desc: {
        type: String,
        max: 300
    },
    tags: {
        type: Array,
        max: 10
    },
    location: {
        type: String, //get from user table
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model('Post', PostSchema); 
export default Post; //exporting a mongoose model file