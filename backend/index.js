// npm i express cors dotenv bcryptjs jsonwebtoken mongoose multer nodemon
// npm run dev

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import adminRoute from './routes/admin.route.js'
import contectRoute from './routes/contact.route.js'
import cookieParser from "cookie-parser";

dotenv.config()
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors())

const corsOptions={
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions))

// app.use(cors({
//     origin:"http://localhost:5173",
//     credentials:true,
//     methods:"GET, POST, PUT, DELETE",
//     allowedHeaders:["Content-Type", "Authorization"]
// }))
let PORT =process.env.port||3000;

// apis
app.get("/", (req, res) => {
    res.send('api working')
})

app.use("/api/v1/admin",adminRoute)
app.use("/api/v1/contact",contectRoute)
// http://localhost:8000/api/v1/user/register
// http://localhost:8000/api/v1/user/login

app.listen(PORT,()=>{
    connectDB();
    console.log(`listening port ${PORT}`)
})