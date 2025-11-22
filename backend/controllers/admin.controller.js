import adminModel from "../models/admin.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const register = async(req, res) =>{
    try{
        const {name, email, password }=req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                message:"something went wrong",
                success:false
            })
        }

        const userExist = await adminModel.findOne({email})
        if(userExist){
            return res.status(400).json({
                message:"user already exist with this email",
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await adminModel.create({
            name,
            email,
            password:hashedPassword,
        })
        return res.status(201).json({
            message:"Account created successfully.",
            success: true,
        });
    }catch(error){
        console.log(error)
    }
}

export const login = async (req, res) =>{
    try{
        const {email, password} = req.body;
        if(!email || !password ){
            return res.status(400).json({
                message: "something is missing",
                success:false,
            })
        }
        let user = await adminModel.findOne({email})
        if(!user){
            return res.status(400).json({
                message: "Inncorect email or password",
                success:false,
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message: "inncorect email or password",
                success:false,
            })
        }

        const tokenData = {
            userId:user._id
        }
        const token = jwt.sign(tokenData, process.env.SECRET_KEY,{expiresIn:'1d'})

        user = {
            _id:user._id,
            name:user.name,
            email:user.email,
        }

        // your web signup hone ke baad 24houre ke baad phir se login signup mangega
        return res
            .status(200)
            .cookie("token", token, {
                maxAge: 1 * 24 * 60 * 60 * 1000,
                httpOnly: true,   
                secure: false,
                sameSite:'Lax',
                path:"/",
            })
            .json({
                message: `Welcome back ${user.name}`,
                user,
                token,
                success: true,
            });   
            
    }catch(error){
        console.log(error)
    }
}

export const logout = async (req, res) =>{
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"logged out successfully",
            success:true
        })
    }catch(error){
        console.log(error)
    }
}
