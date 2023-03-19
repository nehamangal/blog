
const blog_coll = require('../Model/blog')
const User=require('../Model/user')
const getAllblog=async(req,res)=>{
    let blogs;
    try{
       blogs=await blog_coll.find().populate('user');
    }
    catch(err){
        return console.log(err);
    }

    if(!blogs){
        return res.status(404).json({message:"No blog is occur"})
    }
    return res.status(200).json({blogs})

}

module.exports = getAllblog