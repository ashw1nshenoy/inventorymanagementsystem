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
        updateBrand
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
    const status=req.body.status
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

//getAllProducts


const getProducts=(req,res)=>{
    getAllproducts(res)
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
    updateOneBrand
    
}