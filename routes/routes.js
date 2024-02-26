const express=require('express')
const router=express.Router()

const {dashboard,getProducts,getOrders, getBrands, insertNewBrand, deleteOneBrand, updateOneBrand}=require('../controller/control')


router.route('/').get(dashboard)
router.route('/products').get(getProducts)
router.route('/orders').get(getOrders)
router.route('/brands').get(getBrands).post(insertNewBrand)
router.route('/brands/:id').delete(deleteOneBrand).put(updateOneBrand)




module.exports=router