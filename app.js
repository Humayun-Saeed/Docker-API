var express=require('express')
var app=express()

app.get('/admin',(req,res)=>{
res.json("wellcome to the admin side: ")
})
app.get('/host',(req,res)=>{
res.json("wellcome to the host side : ")
})
app.get('/',(req,res)=>{
    console.log("wellcome to the home  side: ");
})

console.log("hello wot docker")
app.listen(3000,()=>{
    console.log("connected to the server: ");
})



