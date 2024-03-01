//import the query file 

const{ countOrders,
        countProducts,
        countUsers,
        countStores,
        getAllproducts,
        getAllOrders,
        getAllBrands,
        insertBrand,
        deleteBrand,
        updateBrand,
        getAllStores,
        insertStore,
        updateStore,
        deleteStore,
        insertProduct,
        updateProduct,
        deleteProduct
    }=require('../models/query')



//Dashboard 
const dashboard=async(req,res)=>{
    try {
        const [productCount, orderCount, userCount, storeCount] = await Promise.all([
            countProducts(),
            countOrders(),
            countUsers(),
            countStores()
        ]);

        res.status(200).json({ productCount, orderCount, userCount, storeCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}



//getAllBrands

const getBrands=(req,res)=>{
    getAllBrands(res)
}

//insert brand

const insertNewBrand=(req,res)=>{
    const brandName=req.body.brandName
    const status=req.body.statusBrand
    insertBrand(res,brandName,status)
}

//Update a brand


const updateOneBrand=(req,res)=>{
    updateBrand(res,req.body,req.params.id)
}

//delete a brand

const deleteOneBrand=(req,res)=>{
    const id=req.params.id
    deleteBrand(res,id)
}


//getAllStores

const getStore=(req,res)=>{
    getAllStores(res)
}

//insert a new Store
const insertNewStore=(req,res)=>{
    const storeName=req.body.storeName
    const status=req.body.statusStore
    insertStore(res,storeName,status)

}

//Update a Store
const updateOneStore=(req,res)=>{
    const storeName=req.body.storeName
    const status=req.body.statusStore
    updateStore(res,storeName,status,req.params.id)
}


//delete a store
const deleteOneStore=(req,res)=>{
    const id=req.params.id
    deleteStore(res,id)
}
//getAllProducts


const getProducts=(req,res)=>{
    getAllproducts(res)
}

//insert a new product
const insertNewProduct=(req,res)=>{
    const body=req.body
    insertProduct(res,body)
}


//update product 
const updateOneProduct=(req,res)=>{
    const body=req.body
    const id=req.params.id
    updateProduct(res,body,id)
}

//delete a product 
const deleteOneProduct=(req,res)=>{
    const id=req.params.id
    deleteProduct(res,id)
}


//getAllOrders

const getOrders=(req,res)=>{
    getAllOrders(res)
}





//export the functions


module.exports={
    dashboard,
    getProducts,
    getOrders,
    getBrands,
    insertNewBrand,
    deleteOneBrand,
    updateOneBrand,
    getStore,
    insertNewStore ,
    updateOneStore  ,
    deleteOneStore,
    insertNewProduct,
    updateOneProduct,
    deleteOneProduct
}