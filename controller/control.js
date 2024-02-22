//import the query file 

const {countOrders}=require('../models/query')
const dashboard=(req,res)=>{
    countOrders(res)
}




//export the functions


module.exports={
    dashboard
}