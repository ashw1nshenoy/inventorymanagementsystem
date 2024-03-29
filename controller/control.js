//import the query file 

const{ 
        userLogin,
        countOrders,
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
        deleteProduct,
        createOrder,
        delOrder,
        updateOneOrder,
        logout,
        getOrderFromId,
        OneBrand,
        getProductFromId,
        getBrandFromId
    }=require('../models/query')


//Login

const login=(req,res)=>{
    userLogin(req,res);
}

//logout

const userLogout=(req,res)=>{
    logout(res)
}
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

const getOneBrand=(req,res)=>{
    OneBrand(res,req.params.id);
}

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

//Orders
//getAllOrders

const getOrders=(req,res)=>{
    getAllOrders(res)
}


//create a order
const insertOrder=(req,res)=>{
    const body=req.body
    createOrder(res,body)
}

//update an order

const updateOrder=(req,res)=>{
    const body=req.body
    const id=req.params.id
    updateOneOrder(res,body,id)
}

//delete a order

const deleteOrder=(req,res)=>{
    const id=req.params.id
    delOrder(res,id)
}


const getOrderById = (req,res)=>{
    const id=req.params.id
    getOrderFromId(res,id);
}
const getProductById = (req,res)=>{
    const id=req.params.id
    getProductFromId(res,id);
}

const getBrandById = (req,res)=>{
    const id=req.params.id
    getBrandFromId(res,id);
}


//export the functions


module.exports={
    login,
    userLogout,
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
    deleteOneProduct,
    insertOrder,
    deleteOrder,
    updateOrder,
    getOrderById,
    getBrandById,
    getProductById
}