const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String, //img URL
        default:"",
    },
  },
    {   timestamps: true    } //add two properties of type Date to Schema - when it was created and updated
);

module.exports = mongoose.model("User", UserSchema);