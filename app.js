const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");
/**logger  */
// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// })

app.use("/api",(req,res,next)=>{
     let{token}=req.query;
     if(token==="giveaccess"){
         next();
     }
     else{
         throw new ExpressError(401,"ACCESS DENIED");
     }
 })

 app.get("/api",(req,res)=>{
     console.log("data");
     res.send("result passed");
 })

app.listen(8080,()=>{
    console.log("app is listening port 8080");
})

app.get("/err",(req,res)=>{
    abcd=abcd;
})
app.use((err,req,res,next)=>{
   let{status=500,message="some error"}=err;
    res.status(status).send(message);
})



// app.use((req,res)=>{
//     res.status(404).send("Page not found");
// })

