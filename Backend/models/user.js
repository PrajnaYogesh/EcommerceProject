const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    name :{
        type :String,
        required : true
    },email : {
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    phoneNo : {
        type: Number,
         required: true
    },
    address : {
        type:String,
        required:true
    },
    datOfBirth : {
        type:String,
        required:true
    }

},{timestamps:true})

const User = mongoose.model("User",userSchema);
module.exports = User;