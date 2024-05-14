import express from "express";
import {login} from '../controller/auth.js';

const AuthRoutes = express.Router();

// Authentication related routes.
AuthRoutes.post("/login", login);

export default AuthRoutes;