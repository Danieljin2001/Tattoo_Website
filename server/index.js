import express from 'express';  //importing express (framework for nodejs)
import mongoose from 'mongoose';//importing mongoose (helps make models in mongoDB)
import dotenv from 'dotenv';    //importing dotenv (hiding pw, users, etc)
import helmet from 'helmet';    //importing helmet (used to secure requests, as in more security)
import morgan from 'morgan';    //importing morgan (when a request is made to the server, morgan tells us about the request)

//importing routers
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";


const app =express();

dotenv.config();

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

//connection to MongoDB database
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true})
    .then(() => app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
        console.log("Connected to MongoDB");
    }))
    .catch((error) => console.log(error.message));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// //test homepage
// app.get("/", (req, res) => {
//     res.send("Welcome to Homepage!");
// });

//routers
app.use("/api/users", userRoutes); 
app.use("/api/auth", authRoutes);
