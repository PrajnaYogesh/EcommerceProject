const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const connectToDB = require('./config/connectToDB')
connectToDB();




app.get('/' ,(req,res)=>{
    console.log("Hello there");
    
})

app.listen(PORT, ()=>{
    console.log("Server is up and running")
})

