import express from "express";
import {AllPosts, CreatePost, GetPostById, DeletePostById, UpdatePostById} from '../controller/post.js';

//import middlewares
import verifyToken from '../middleware/auth.js'

const PostRoutes = express.Router();

// post page route.
PostRoutes.get("/post", verifyToken, AllPosts);
PostRoutes.get("/post/:id", verifyToken, GetPostById);
PostRoutes.delete("/post/:id", verifyToken, DeletePostById);
PostRoutes.put("/post/:id", verifyToken, UpdatePostById);
PostRoutes.post("/post", CreatePost);

export default PostRoutes;