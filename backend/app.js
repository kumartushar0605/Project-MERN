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
    origin:["http://localhost:3000","http://localhost:3001"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,// agar ye nhi rhe ga to cookie sab front end par nhi pahuche ga
}))
 app.use(userRouter);
 app.use(userRouterr);


app.get("/",(req,res)=>{
    res.send("working")
})


app.listen(5000,()=>{
    console.log(`server is working on port : 5000 `)
})