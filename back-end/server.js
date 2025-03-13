const express = require('express');
const connectDB =require('./config/db');
const listUsers =require('./firebase/firebaseService/firebaseUserService');
const dotenv =require("dotenv");
dotenv.config();
const app= express();

const PORT=process.env.PORT || 5000;
connectDB();

app.get('/test',listUsers);

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});