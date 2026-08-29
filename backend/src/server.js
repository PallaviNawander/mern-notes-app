import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
//const express = require("express")
import cors from "cors"
dotenv.config();
const app=express();
const PORT=process.env.PORT || 5001
//middleware
app.use(cors({
    origin:"http://localhost:5173",
}
));
app.use(express.json()); 
app.use(rateLimiter);// this middleware will parse JSON bodies : req.body
/*app.use((req,res,next)=>{
    console.log(`Req method id ${req.method} & Req URL is ${req.url}`);
    next();
}); */// our simple custom middleware

app.use("/api/notes",notesRoutes);
connectDB().then(()=>{
    app.listen(PORT, ()=>{
       console.log("Server started on PORT : 5001");
   });
});
