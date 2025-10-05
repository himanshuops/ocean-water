import mongoose from "mongoose";

const user = new mongoose.Schema({
    text:{
        type:String,
    },
    number:{
        type:String
    },
    username:{
        type:String
    }
})

const User = mongoose.model("User", user)
export default User