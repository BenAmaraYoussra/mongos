//1 require express
const express = require('express')

//2 instance from express
const app = express()
//5 require dotenv
require('dotenv').config()

//6 connect to db
const connectDB = require('./config/connectDB')
connectDB()

//3 PORT 
const PORT = process.env.PORT

//4 server
app.listen(PORT, (err)=>{
    err?
    console.log(err):
    console.log(`the server is running https://localhost:${PORT}`);

})
