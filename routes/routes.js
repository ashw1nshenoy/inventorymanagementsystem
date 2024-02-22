const express=require('express')
const router=express.Router()

const {dashboard}=require('../controller/control')


router.route('/').get(dashboard)



module.exports=router