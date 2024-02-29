const express=require('express')
const router=express.Router()

const {dashboard,getProducts,getOrders, getBrands, insertNewBrand, deleteOneBrand, updateOneBrand,getStore, insertNewStore, updateOneStore, deleteOneStore}=require('../controller/control')


router.route('/').get(dashboard)
router.route('/products').get(getProducts)
router.route('/orders').get(getOrders)
router.route('/brands').get(getBrands).post(insertNewBrand)
router.route('/brands/:id').delete(deleteOneBrand).put(updateOneBrand)
router.route('/stores').get(getStore).post(insertNewStore)
router.route('/stores/:id').put(updateOneStore).delete(deleteOneStore)



module.exports=router