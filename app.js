import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/connectDB.js";

import User from "./routes/postgresRoutes.js";

const app = express();
app.use(express.json());

// Dotenv
dotenv.config({path:"./config/config.env"});

// connect to database
connectDB();

app.use('/api/v1/', User);

app.listen(process.env.PORT, ()=>{
    console.log(`connected successfully to port ${process.env.PORT}`);
})