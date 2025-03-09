const express = require('express');
const connectDB =require('./config/db');
const dotenv =require("dotenv");
dotenv.config();
const app= express();

const PORT=process.env.PORT || 5000;

connectDB();

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});