import mongoose from 'mongoose'; //importing mongoose

//User Schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    posts: {
        type: Array,
        default: []
    },
    bio: {
        type: String,
        max: 150
    },
    location: {
        type: String,
        //required: true ...only for Artists
    },
    typeId: {
        type: String,
        //required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    
});

const User = mongoose.model('User', UserSchema); 
export default User; //exporting a mongoose model file
