// const express=require('express')
const express = require("express");
const app = express();
const body_parser = require('body-parser')
const blog_coll =require( '../Model/blog')
const userColl = require("../Model/user");
const { default: mongoose } = require("mongoose");

app.use(body_parser.urlencoded({extended:true}))
app.use(express.json())
const make_blog=async(req,res)=>{
    const {title,description,image,user}=req.body;
  
    let existingUser;
    try{
       existingUser=await userColl.findById(user);
    }catch(err){
        return console.log(err);
    }
   
    if(!existingUser){
        return res.status(404).json({message:"unable to find user By this id"});
    }
  

    const blog = new blog_coll({
        title,
        description,
        image,
        user
    });

    try{
        await blog.save();
          existingUser.blog.push(blog);
        await existingUser.save();
    //   const session =await mongoose.startSession();
    //  session.startTransaction();
    //  await blog.save({session});
    //  existingUser.blog.push(blog);
    //  console.log(existingUser); 
    //  await session.commitTransaction();
    }
    catch(err){
         console.log(err);
         return res.status(500).json({message:err})
    }
    
    return res.status(200).json({blog})
   
}

module.exports=make_blog