const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/portfolio")

.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed")
})

const newSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true
    }, 
    msg:{
        type:String,
        required:true
    }
      
})

const collection=mongoose.model("collection",newSchema)

module.exports=collection

