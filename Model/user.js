const mongoose =require("mongoose");

const user_data = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  
  blog:[{type:mongoose.Types.ObjectId,ref:"Blogs"}]

})

const userColl = new mongoose.model("User",user_data);
module.exports = userColl