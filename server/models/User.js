const mongoose = require("mongoose"); //importing mongoose

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
    }
    
},
    { timestamps: true}
);

module.exports = mongoose.model("User", UserSchema); //default export