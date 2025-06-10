import express from "express";
import userRouter from "./routes/emplyoee.js"
import { connectDB } from "./data/database.js";
import cookieParser from "cookie-parser";
import userRouterr from "./routes/report.js"
import cors from "cors"

 const app = express();
 connectDB();
 app.use(express.json());
 app.use(cookieParser())
 app.use(cors({
    origin:["http://192.168.152.25:3000","http://192.168.152.25:3001","http://localhost:3000","http://localhost:3001"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
 app.use(userRouter);
 app.use(userRouterr);


app.get("/",(req,res)=>{
    res.send("working")
})


app.listen(5000,'192.168.152.25',()=>{
    console.log(`server is working on port : 5000 `)
})