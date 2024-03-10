const express=require('express')
const router=express.Router()
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Now you can use myEmitter to emit events and add listeners
myEmitter.setMaxListeners(20); // Increase the limit to 15


const {dashboard,getProducts,getOrders, getBrands, insertNewBrand, deleteOneBrand, updateOneBrand,getStore, insertNewStore, updateOneStore, deleteOneStore,insertNewProduct, updateOneProduct, deleteOneProduct, getOneBrand}=require('../controller/control')


router.route('/').get(dashboard)
router.route('/orders').get(getOrders)
router.route('/brands').get(getBrands).post(insertNewBrand)
router.route('/brands/:id').delete(deleteOneBrand).put(updateOneBrand).get(getOneBrand)
router.route('/stores').get(getStore).post(insertNewStore)
router.route('/stores/:id').put(updateOneStore).delete(deleteOneStore)
router.route('/products').get(getProducts).post(insertNewProduct)
router.route('/products/:id').put(updateOneProduct).delete(deleteOneProduct)



module.exports=router