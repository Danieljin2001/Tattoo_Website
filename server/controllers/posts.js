import Post from '../models/Post.js'; //imoprting post schema


//getting post logic
export const getPost = async (req, res) => {
    try {
        const post = await Post.find();

        console.log(post);

        res.status(200).jscon(postMessages);
    } catch (error) {
        
    }
}

//creating post logic
export const createPost = (req, res) => {

}