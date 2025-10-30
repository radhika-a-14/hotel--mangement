import express from  "express"
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import connectDB from "./configs/db.js";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

dotenv.config({path:'./server/.env'});
console.log("Mongo URI:", process.env.MONGODB_URI);


connectDB()
const app = express()
app.use(cors())

//middleware
app.use(express.json())
app.use(clerkMiddleware())
//api to list to clerk

app.use("/api/clerk" ,clerkWebhooks);

app.get('/',(req,res)=> res.send("Api is working"))
 const PORT = process.env.PORT || 3000 ;
 app.listen(PORT ,()=> console.log(`server running on port ${PORT}`));
