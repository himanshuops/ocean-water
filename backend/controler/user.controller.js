import User from "../model/user.model.js";


export const contect = async (req, res) => {
    try{
        const {text, number, username } = req.body;
        const user = await User.create({
            text,
            number,
            username,
        })
        return res.status(201).json({
                message: "Account created successfully",
                success:true,
                user
        })

    }catch(error){
        console.log(error)
    }
}