const express =require('express');
const resumeController=require('../controller/resumeController');
const router=express.Router();

router.post('/resume', resumeController.createResume);