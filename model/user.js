import mongoose from "mongoose"

const userSchema = mongoose.Schema(
    {
        email : {
            
            type : String,
            required : true,
            unique: true,
            
        },
        password : {
            type : String,
            required : true
        },
        firstName : {
            type : String,
            required : true,
        },
        password : {
            type : String,
            required : true
        },
        type : {
            type : String,
            required : true,
            default : "customer"
        },
        whatsapp : {
            type : Number,
            required : true
        },
        phoneNumber : {
            type : Number,
            required : true
        },
        disabled : {
            type : Boolean,
            required : true,
            default : false
        },
        emailVerified : {
            type : Boolean,
            required : true,
            default : false
        }
    }
    )
    
    // Create the index if it doesn't exis
    userSchema.index({ email: 1 }, { unique: true });


    //user kiyana collection ekata ara hada gaththa userSchema sturcture eka da gannawa
   const User = mongoose.model("users",userSchema)  

   export default User;

