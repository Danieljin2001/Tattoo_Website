const mongoose = require("mongoose");

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
    }
},
    {timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema); //default export