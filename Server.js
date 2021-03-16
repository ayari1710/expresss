const express = require("express");
const app = express();
  
  app.get("/",(req,res)=>{
      res.sendFile(__dirname+"/Public/Pageaccueil.html");})
     
      app.use("/contacter",logger );

app.get("/contacter",(req,res)=>{
    res.sendFile(__dirname+"/Public/Nous_contacter.html");
})
 
app.get("/services",(req,res)=>{
    res.sendFile(__dirname+"/Public/Nos_services.html");
})
app.get("/index.css",(req,res)=>{
    res.sendFile(__dirname+"/Public/index.css")
})

function logger (req,res,next){
    var t= new Date().getHours();
if (t >=12 && t < 17){
    next()  
}  
else{
    res.send("Merci de nous contacter de 9h a 17h ",)
}
}

const port =5000 ;
app.listen(port,()=>{
    console.log(`the server are runnig on ${port}`);
})