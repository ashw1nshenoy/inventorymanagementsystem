const mysql=require('mysql')




//Database Connection MYSQL


const db=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'inventory',
    connectionLimit:10,
    multipleStatements: true
}
)
module.exports=db




