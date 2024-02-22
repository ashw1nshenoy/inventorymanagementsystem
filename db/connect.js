const mysql=require('mysql')
require('dotenv').config();




//Database Connection MYSQL


const db=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'inventory',
    connectionLimit:10
}
)
module.exports=db




