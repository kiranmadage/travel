import mongoose, { Schema , model } from "mongoose";


const reviewSchema = new Schema(
    {
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Tour"
        },
        
        username:{
            type:String,
            required:true
        },
        
        reviewText:{
            type:String,
            required:true
        },
        
        rating:{
            type:Number,
            required:true,
            min:0,
            max:5,
            default:0
        }
        
    },
    {
        timestamps:true
    }
)

const Review = model("Review" , reviewSchema)

export default Review;