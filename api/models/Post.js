const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    desc:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:false,
    },
    username:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
        required: false,
    }
  },
    {   timestamps: true    } //add two properties of type Date to Schema - when it was created and updated
);

module.exports = mongoose.model("Post", PostSchema);