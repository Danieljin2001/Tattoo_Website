const mongoose = require("mongoose");

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

module.exports = mongoose.model("Likes", LikesSchema); //default export