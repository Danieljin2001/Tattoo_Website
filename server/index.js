const express = require("express"); //importing express (framework for nodejs)
const mongoose = require("mongoose"); //importing mongoose (helps make models in mongoDB)
const dotenv = require("dotenv"); //importing dotenv (hiding pw, users, etc)
const helmet = require("helmet"); //importing helmet (used to secure requests, as in more security)
const morgan = require("morgan"); //importing morgan (when a request is made to the server, morgan tells us about the request)



const app =express();

//port 8800
app.listen(8800, () =>{
    console.log("Backend server is running");
});