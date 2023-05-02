const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
     name:{
        type:String,
        required: true,
     },
  },
    {   timestamps: true    } //add two properties of type Date to Schema - when it was created and updated
);

module.exports = mongoose.model("Category", CategorySchema);