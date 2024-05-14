import express from "express";
import {AllUsers, CreateUser} from '../controller/user.js';

//import middlewares
import verifyToken from '../middleware/auth.js'

const UserRoutes = express.Router();

// user page route.
UserRoutes.get("/user", verifyToken, AllUsers);
UserRoutes.post("/user", CreateUser);

export default UserRoutes;