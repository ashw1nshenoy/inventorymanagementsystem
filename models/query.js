// const mysql=require('mysql')
const db=require('../db/connect')



//Query to count All orders
const countOrders=(res)=>{
    const ans=`SELECT count(ord_no) FROM inventory.orders`
    db.query(ans,(error,result,feilds)=>{
    if(error)
        return res.status(400).json(error)
    return res.status(200).json(result)
})
}



module.exports={
    countOrders
}