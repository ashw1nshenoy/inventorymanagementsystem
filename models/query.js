const db=require('../db/connect')
const jwt =require( "jsonwebtoken");

//Login
const userLogin=(req,res)=>{
    const sql = "SELECT * from user Where email = ? and password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, result) => {
      if (err) return res.json({ loginStatus: false, Error: "Query error" });
      if (result.length > 0) {
        const email = result[0].email;
        const token = jwt.sign(
          { role: "admin", email: email, id: result[0].id },
          "jwt_secret_key",
          { expiresIn: "1d" }
        );
        res.cookie('token', token)
        return res.json({ loginStatus: true });
      } else {
          return res.json({ loginStatus: false, Error:"wrong email or password" });
      }
    });
}

//Logout

const logout= (res) => {
    res.clearCookie('token')
    return res.json({Status: true})
}

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
        const ans = `SELECT count(cust_id) AS order_count FROM inventory.orders`;
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
        const ans = `SELECT count(*) AS user_count FROM inventory.user`;
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


//get One Brand

const OneBrand=(res,id)=>{
    const ans=`select * from inventory.brand where brand_no=?`
    db.query(ans,[id],(error,result,fields)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json(result)
    })
}


//Edit a brand 

const updateBrand=(res,body,id)=>{
    const ans=`update inventory.brand set brand_name=?,Status=? where brand_no=?`
    db.query(ans,[body.brand_name,body.status,id],(error,result,feilds)=>{
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


//Get all the Store 
const getAllStores=(res)=>{
    const ans=`select * from inventory.stores`
    db.query(ans,(error,result,fields)=>{
        if(error)
            return res.status(400).json(erorr)
        return res.status(200).json(result)
    })   
}


//insert a new store

const insertStore=(res,storeName,status)=>{
    const ans=`insert into inventory.stores values(0,?,?)`
    db.query(ans,[storeName,status],(error,result,feilds)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json({Message:"Insertion Suceesful"})
    })
}

//Edit a store 

const updateStore=(res,storeName,statusStore,id)=>{
    const ans=`update inventory.stores set store_name=?,status=? where store_no=?`
    db.query(ans,[storeName,statusStore,id],(error,result,feilds)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json({Message:"Update Suceesful"})
    })
}

//Delete a store

const deleteStore=(res,id)=>{
    const ans=`delete from inventory.stores where store_no = ?`
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

//insert new product 

const insertProduct=(res,body)=>{
    const ans=`insert into inventory.products values(0,?,?,?,?,?,?,?,?,?)`
    db.query(ans,[body.productName,body.price,body.quantity,body.color,body.size,body.brand,body.category,body.store,body.availability],
        (error,result,feilds)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json({Message:"Insertion Suceesful"})
    })
}


//Update product 


const updateProduct =(res,body,id)=>{
    const ans=`update inventory.products set product_name=?,price=?,quantity=?,color=?,size=?,brand=?,category=?,\
    store=?,availability=? where product_no=?`
     db.query(ans,[body.productName,body.price,body.quantity,body.color,body.size,body.brand,body.category,body.store,body.availability,id],
        (error,result,feilds)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json({Message:"Update Suceesful"})
    })
}


//Delete a product

const deleteProduct=(res,id)=>{
    const ans=`delete from inventory.products where product_no = ?`
    db.query(ans,[id],(error,result,fields)=>{
        if(error)
        return res.status(400).json(error)
    return res.status(200).json({Message:"Delete Suceesful"})
    })
}



//orders 
//Get ALL Orders
 const getAllOrders=(res)=>{
    const ans=`select * from inventory.orders`
        db.query(ans,(error,result,fields)=>{
            if(error)
                return res.status(400).json(err)
            return res.status(200).json(result)
        })  
 }


//create a new order
const createOrder =(res,body)=>{
    const ans=`insert into inventory.orders values(0,?,?,?,?,?,?,?)`
    db.query(ans,[body.cust_name,body.cust_address,body.phone,body.product,body.quantity,body.amount,body.status],
        (error,result,feilds)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json({Message:"Insertion Suceesful"})
    })
}


//update a order

const updateOneOrder=(res,body,id)=>{
    const ans=`update inventory.orders set cust_name=?,cust_address=?,phone=?,product=?,quantity=?,amount=?,status=?
     where cust_id=?`
     db.query(ans,[body.cust_name,body.cust_address,body.phone,body.product,body.quantity,body.amount,body.status,id],
        (error,result,feilds)=>{
        if(error)
            return res.status(400).json(error)
        return res.status(200).json({Message:"Update Suceesful"})
    })
}


//delete a order 

const delOrder=(res,id)=>{
    const ans=`delete from inventory.orders where cust_id=?`
    db.query(ans,[id],(error,result,feilds)=>{
        if(error)
            return res.status(404).json(error)
        return res.status(200).json({Message:"Successfully Deleted"})
    })
}










const getOrderFromId=(res,id)=>{
    const ans=`SELECT *from inventory.orders where cust_id=?`
    db.query(ans,[id],(error,result,feilds)=>{
        if(error)
            return res.status(404).json(error)
        return res.status(200).json(result)
    })
}
const getProductFromId=(res,id)=>{
    const ans=`SELECT *from inventory.products where product_no=?`
    db.query(ans,[id],(error,result,feilds)=>{
        if(error)
            return res.status(404).json(error)
        return res.status(200).json(result)
    })
}
const getBrandFromId=(res,id)=>{
    const ans=`SELECT *from inventory.brand where brand_no=?`
    db.query(ans,[id],(error,result,feilds)=>{
        if(error)
            return res.status(404).json(error)
        return res.status(200).json(result)
    })
}







module.exports={
    userLogin,
    logout,
    countOrders,
    countProducts,
    countUsers,
    countStores,
    getAllproducts,
    getAllOrders,
    getAllStores,
    getAllBrands,
    insertBrand,
    deleteBrand,
    updateBrand,
    insertStore,
    updateStore,
    deleteStore,
    insertProduct,
    updateProduct,
    deleteProduct,
    createOrder,
    delOrder,
    updateOneOrder,
    getOrderFromId,
    OneBrand,
    getProductFromId,
    getBrandFromId
}