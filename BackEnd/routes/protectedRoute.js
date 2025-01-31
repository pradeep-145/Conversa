const express=require('express')
const router=express.Router()
const {authMiddleware}=require('../middleware/authMiddleWare')
const homeController=require('../controllers/homeController')
router.get('/home',authMiddleware,homeController.home);
module.exports=router