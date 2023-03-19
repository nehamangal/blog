const mongoose=require('mongoose')

const blog_stru=new mongoose.Schema({
    title:{
         type:String,
    },
    description:{
        type:String,
   },
   image:{
    type:String,
},
user:{
    type:mongoose.Types.ObjectId,
    ref:"User",
}
})

const blog_det = new mongoose.model("Blogs",blog_stru);

module.exports=blog_det
