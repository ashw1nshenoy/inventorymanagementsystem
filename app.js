require('dotenv').config();

//Imports
const express= require('express')
const app=express()
const cors=require('cors')


//files
const db=require('./db/connect')
const routes=require('./routes/routes')

//Predefined Variables
const port=process.env.PORT


//Middlewares
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['GET', 'POST', 'PUT', "DELETE"],
    credentials: true
}))

//Routes

app.use('/api/v1',routes)
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(token) {
        Jwt.verify(token, "jwt_secret_key", (err ,decoded) => {
            if(err) return res.json({Status: false, Error: "Wrong Token"})
            req.id = decoded.id;
            next()
        })
    } else {
        return res.json({Status: false, Error: "Not autheticated"})
    }
}
app.get('/verify',verifyUser, (req, res)=> {
    return res.json({Status: true, role: req.role, id: req.id})
} )

//Starting the server
const start=async()=>{
        try{
            app.listen(port,()=>{
                console.log("Server Running ..")
            })
        }
        catch(error){
            console.log(error)
        }
}
start()