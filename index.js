console.log("this is index.js")
const path=require('path');//its provide utility to work with files
const express=require('express');
const dotenv=require('dotenv').config();
const port=process.env.PORT||7000;

const app=express();
//to enable body parse
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//set static folder
app.use(express.static(path.join(__dirname,'public')));
app.use('/openai',require('./routes/aiRouter'));

app.listen(port, ()=>console.log(`server started on port ${port}`));