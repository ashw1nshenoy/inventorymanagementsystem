const db=require('../db/connect')



//Query to count All orders
const countProducts = () => {
    return new Promise((resolve, reject) => {
        const ans = `SELECT count(product_no) AS product_count FROM inventory.products`;
        db.query(ans, (error, result, fields) => {
            if (error)
                reject(error);
            else
                resolve(result[0].product_count);
        });
    });
}

const countOrders = () => {
    return new Promise((resolve, reject) => {
        const ans = `SELECT count(ord_no) AS order_count FROM inventory.orders`;
        db.query(ans, (error, result, fields) => {
            if (error)
                reject(error);
            else
                resolve(result[0].order_count);
        });
    });
}

const countUsers = () => {
    return new Promise((resolve, reject) => {
        const ans = `SELECT count(id) AS user_count FROM inventory.users`;
        db.query(ans, (error, result, fields) => {
            if (error)
                reject(error);
            else
                resolve(result[0].user_count);
        });
    });
}

const countStores = () => {
    return new Promise((resolve, reject) => {
        const ans = `SELECT count(store_no) AS store_count FROM inventory.stores`;
        db.query(ans, (error, result, fields) => {
            if (error)
                reject(error);
            else
                resolve(result[0].store_count);
        });
    });
}


//Brands Section
//Get all the Brands

const getAllBrands=(res)=>{
    const ans=`select * from inventory.brand`
    db.query(ans,(error,result,feilds)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json(result)
    })
}


//Insert a new brand

const insertBrand=(res,brandName,status)=>{
    const ans=`insert into inventory.brand values(0,?,?)`
    db.query(ans,[brandName,status],(error,result,feilds)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json({Message:"Insertion Suceesful"})
    })
}


//Edit a brand 

const updateBrand=(res,body,id)=>{
    const ans=`update inventory.brand set brand_name=?,Status=? where brand_no=?`
    db.query(ans,[body.brandName,body.status,id],(error,result,feilds)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json({Message:"Update Suceesful"})
    })
}

//Delete a brand

const deleteBrand=(res,id)=>{
    const ans=`delete from inventory.brand where brand_no = ?`
    db.query(ans,[id],(error,result,fields)=>{
        if(error)
        return res.status(400).json(error)
    return res.status(200).json({Message:"Delete Suceesful"})
    })
}


//Get all the Products 
const getAllproducts=(res)=>{
        const ans=`select * from inventory.products`
        db.query(ans,(error,result,fields)=>{
            if(error)
                return res.status(400).json(erorr)
            return res.status(200).json(result)
        })   
}


//Get ALL Orders
 const getAllOrders=(res)=>{
    const ans=`select * from inventory.orders`
        db.query(ans,(error,result,fields)=>{
            if(error)
                return res.status(400).json(err)
            return res.status(200).json(result)
        })  
 }




















module.exports={
    countOrders,
    countProducts,
    countUsers,
    countStores,
    getAllproducts,
    getAllOrders,
    getAllBrands,
    insertBrand,
    deleteBrand,
    updateBrand
}