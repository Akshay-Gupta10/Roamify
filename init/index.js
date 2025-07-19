const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/roamify";
async function main(){
    await mongoose.connect(MONGO_URL);
}

main()
.then(()=> console.log("DB connected"))
.catch((err)=> console.log(err))

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({
        ...obj,
        owner:"68739b558dd344dda1e1ad20"
    }))
    await Listing.insertMany(initData.data); //key of the object
    console.log("data was initialized")
}

initDB();
