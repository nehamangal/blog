const userColl = require("../Model/user");
const express = require("express");
const app = express();
const body_parser = require('body-parser')

app.use(body_parser.urlencoded({extended:true}))
app.use(express.json())

const getByuserId=async(req,res)=>{
   const userid = req.params.id;
   console.log(userid)

   let userblogs;
   try{
       userblogs=await userColl.findById(userid).populate('blog');
   }catch(err){
    return console.log(err);
   }
   console.log(userblogs.name);

   if(!userblogs){
    return res.status(404).json({message:"No blogs found"});
   }
   console.log(userblogs)

   return res.status(200).json({user:userblogs})
} 


module.exports=getByuserId