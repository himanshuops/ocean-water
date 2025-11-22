// Database ko connected karane ke liye utils ka use karate hai

import mongoose from "mongoose";
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb successfully connected")
    }catch(error){
        console.log(error)
    }
}
export default connectDB;