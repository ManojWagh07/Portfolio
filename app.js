const express=require("express")
const cors=require("cors")
const collection=require("./mongo")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{
     
})

app.post("/", async(req,res)=>{
    const{msg,email,name}=req.body
    
    // try{
    //     const check=await collection.findOne({email:email,name:name})
    //     if(check){
    //         res.json("exist")
    //     }
    //     else{
    //         res.json("notexist")
    //     }
    // }
    // catch(e){
    //     res.json("notexist")
    // }
    
    const data={
        name:name,
        email:email,
        msg:msg
    }
    await collection .insertMany([data])
})
app.listen(8000,()=>{
    console.log("port connected")
})
