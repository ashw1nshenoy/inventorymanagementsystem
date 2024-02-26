// const mysql=require('mysql')
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


//insert a new brand

const insertBrand=(res,brandName,status)=>{
    const ans=`call add_or_delete_brands(0,?,?)`
    db.query(ans,[brandName,status],(error,result,feilds)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json({Message:"Insertion Suceesful",result})
    })
}


//Edit a brand 

const updateBrand=(res,body,id)=>{
    const ans=`call add_or_delete_brands(?,?,?)`
    db.query(ans,[id,   body.brandName,body.status],(error,result,feilds)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json({Message:"Update Suceesful"})
    })
}

//delete a brand

const deleteBrand=(res,id)=>{
    const ans=`delete from inventory.brand where brand_no = ?`
    db.query(ans,[id],(error,result,feilds)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json({Message:"delete sucessfull"})
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