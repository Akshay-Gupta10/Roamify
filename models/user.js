const { types } = require("joi");
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({
    email:{
        type:String,
        required:true
    }
})

//This plugin automatically make a field for username and hashed pass with hashing and salting
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
