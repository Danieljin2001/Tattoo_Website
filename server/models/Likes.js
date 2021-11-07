import mongoose from 'mongoose';

//Likes Schema
const LikesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    }
});

const Likes = mongoose.model('Likes', LikesSchema); 
export default Likes; //exporting a mongoose model file