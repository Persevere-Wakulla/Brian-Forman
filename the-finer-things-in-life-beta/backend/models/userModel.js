import mongoose from "mongoose"

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName:{
            type:String,
            required:true,
        },
        username:
        {
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            lowercase:true,
        },
        password:
        {
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
            min:18,
            max:100,
        },
        cart:[Object],
    }
)

export const Users = mongoose.model("Users", userSchema)