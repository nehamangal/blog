
const blog_coll =require( '../Model/blog')

const delete_blog=async(req,res)=>{
   const id = req.params.id
   let blog;

   try{
      blog = await blog_coll.findByIdAndRemove(id).populate('user')
   
      await blog.user.blog.pull(blog)
      await blog.user.save();
   }catch(err){
    return console.log(err);
   }

   if(!blog){
    return res.status(404).json({message:"Unable to delete"})
   }
   return res.status(200).json({message:"Successfully deleted"})
}

module.exports=delete_blog;