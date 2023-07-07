const express = require('express');
const path = require('path');
const app = express();
const PORT = 3030;
app.use(express.static('public'))
//app.listen(PORT, ()=> console.log('servidor corriendo en http://localhost:${PORT}'));
app.listen(PORT,()=>console.log("servidor corriendo en http://localhost:" +  PORT));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views' ,'home.html')))
app.get('/home',(req,res)=> res.sendFile(path.join(__dirname,'views' ,'home.html')))
app.get('/*',(req,res)=> res.sendFile(path.join(__dirname,'views' ,'home.html')))





