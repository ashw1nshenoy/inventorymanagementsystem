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



module.exports={
    countOrders,
    countProducts,
    countUsers,
    countStores
}