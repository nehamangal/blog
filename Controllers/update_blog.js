const blog_coll =require( '../Model/blog')

const blog_update = async(req,res)=>{
    const {title,description}=req.body;
   const blogId = req.params.id;

   let blog;

   try{
     blog = await blog_coll.findByIdAndUpdate(blogId,{
        title,
        description
     })
   }catch(err){
    return console.log(err);
   }

   if(!blog){
    return res.status(404).json({message:"Unable to Update blog"});
   }

   return res.status(200).json({blog})
}

module.exports=blog_update