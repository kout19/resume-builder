const express = require('express');
const connectDB =require('./config/db');
const admin= require('./firebase/firebaseConfig/firebaseConfig');
const dotenv =require("dotenv");
dotenv.config();
const app= express();

const PORT=process.env.PORT || 5000;

connectDB();

app.get('/test', (req, res)=>{
    admin.auth().listUsers(100)
    .then((userRecords)=>{
        console.log("Successfully fetched users",userRecords);
        res.status(201).json({message:"Users fetched successfully",userRecords});
    })
    .catch((error)=>{
    console.log("Error fethcing users",error);
    res.status(500).json({message:"users not fetched"});
    });
})
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});