const express = require("express");
const dotenv = require('dotenv')
dotenv.config();
const app = express();
const connects =require('../backend/Database/data');
const router=require("./Routes/user_routes")
const body_parser = require('body-parser')
const Database=process.env.Database
const PORT = process.env.PORT
const HOST=process.env.HOST
const blog_router = require('./Routes/blog')
const cors = require('cors');
const { default: mongoose } = require("mongoose");


app.use(cors());
app.use(body_parser.urlencoded({extended:true}))
app.use(express.json())


app.use('/api/user',router)
app.use('/api/blog',blog_router)

app.listen(PORT,HOST,()=>{
    console.log("Server is running ");
})

