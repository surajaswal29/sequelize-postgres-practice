import userSchema from "../models/postgresModels.js";


// create user
export const createUser = async (req,res,next)=>{

    const user = await userSchema.create({
        ...req.body
    })

    if(!user){
        console.log("cannot create user");
    }

    res.status(200).json({
        status:true,
        message:"USer Added",
        user
    })
}