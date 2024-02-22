//import the query file 

const { countOrders,
    countProducts,
    countUsers,
    countStores
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




//export the functions


module.exports={
    dashboard
}