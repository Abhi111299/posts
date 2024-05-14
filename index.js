import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from "mongoose";

import {CONNECTION_STRING} from './config/db.config.js';
import errorHandler from './helper/error_handler.js';

//import routes here
import UserRoutes from './routes/user.js';
import AuthRoutes from './routes/auth.js';

const app = express();

app.use(cors());
const corsOptions = {
	origin: true,
	credentials: true
}
app.options('*', cors(corsOptions)); // preflight OPTIONS; put before other routes

app.use (bodyParser.json({limit: '50mb'})); // parse requests of content-type - application/json
app.use (bodyParser.urlencoded({extended:true, limit: '50mb'})); // parse requests of content-type - application/x-www-form-urlencoded

app.use(errorHandler);

app.use('/api/v1', UserRoutes);
app.use('/api/v1', AuthRoutes);

dotenv.config(); // loading all the .env variables

mongoose.set('strictQuery', false);
app.listen(process.env.PORT, async () => {
	const mongoDB = CONNECTION_STRING;
	await mongoose.connect(mongoDB);
	if (mongoose.connection.readyState){
		console.log(`mongo db connected successfully => ${mongoDB}`);
	}
    
	console.info(`app started listening on the port ${process.env.PORT}`);
    console.info(`server is running at ${process.env.HOST}:${process.env.PORT}`);
});

export default app;