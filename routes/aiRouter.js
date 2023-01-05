const express=require('express');
const {generateImage}=require('../controllers/Controller')
const router=express.Router();

router.post('/Generateimage',generateImage); 

module.exports=router;