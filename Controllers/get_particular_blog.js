
const blog_coll = require('../Model/blog')

const getSpeecificBlog=async(req,res)=>{
   const blogId = req.params.id;
   let blog;
   try{
      blog=await blog_coll.findById(blogId)
   }catch(err){
    return console.log(err);
   }

   if(!blog){
    return res.status(404).json({message:"No blog found "})
   }

   return res.status(200).json({blog})
}

module.exports=getSpeecificBlog

