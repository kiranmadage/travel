import {Schema , model} from 'mongoose'


const tourSchema = new Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        city:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        distance:{
            type:Number,
            required:true,
        },
        photo:{
            type:String,
            required:true,
        },
        desc:{
            type:String,
            required:true,
        },
        price:{
            type:String,
            required:true,
        },
        maxGroupSize:{
            type:Number,
            required:true,
        },

        reviews:[
            {
                type:mongoose.Types.ObjectId,
                ref:"Review"
            },
        ],

        featured:{
            type:Boolean,
            default:false
        },
    },
    {
        timestamps:true
    }
);

const Tour = model("Tour" ,tourSchema )
export default Tour;