const mongoose=require("mongoose");
const Review=require("./review");
// const User=require("./user.js");
const Schema=mongoose.Schema;

const listingSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
        url:String,
        filename:String,
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    geometry:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    // category:{
    //     type:String,
    //     enum:["mountains","castles","etc"];
    // }
})

//post middleware for handling the deletion of reviews in case of listing deletion
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in :listing.reviews}})
    }
})

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;
