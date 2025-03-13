const express =require("express");
const listUsers =require("../firebaseService/firebaseUserService");
const router=express.Router();
router.get('/', async(req, res)=>{
    const users=await listUsers();
    res.json({users});
});

module.exports =router;
