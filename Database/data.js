const mongoose = require('mongoose');


const connects = mongoose.connect(`mongodb://${process.env.DB_NAME}:${process.env.DB_PORT}/blog`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
       console.log("database is connected");
}).catch((err)=>{
    console.log(err)
})

module.exports = connects;